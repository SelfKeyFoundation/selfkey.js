"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserDataForToken = void 0;

var _request = _interopRequireDefault(require("request"));

var _kyccInternalClient = require("./kycc-internal-client");

var _utils = require("./utils");

var _utils2 = require("../identity/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module kycc/get-user-data-for-token
 */

/**
 * File Processor
 * @typedef FileProcessor
 * @property {boolean} stream
 * @property {function} process
 * @example
 * ```js
 * { stream: false, process: (file, id) => file }
 * ```
 */

/**
 * Options used in getUserDataForToken function
 * @typedef GetUserDataForTokenOptions
 * @property {string} instanceUrl
 * @property {string} templateId
 * @property {FileProcessor} fileProcessor
 */

/**
  * User Object
  * @typedef KYCCUserObject
  * @property {string} id id of user in KYCC
  * @property {object} attributes map from attribute id to attribute value
  * @example
  * ```js
  * {
	id: '5ddd5b1656fbcef0dd389637',
	attributes: {
		firstName: {
			id: '5d076f0a315423134405cbc4',
			label: 'First Name',
			required: true,
			schema: 'http://platform.selfkey.org/schema/attribute/first-name.json',
			valid: true,
			value: 'first-name'
		},
		lastName: {
			label: 'Last Name',
			id: '5d076f20315423f5db05cbc6',
			required: true,
			schema: 'http://platform.selfkey.org/schema/attribute/last-name.json',
			valid: true,
			value: 'last-name'
		},
		email: {
			id: '5d13577f72089544cb86cda7',
			label: 'Email Address',
			required: true,
			schema: 'http://platform.selfkey.org/schema/attribute/email.json',
			valid: true,
			value: 'test-4952@test.com'
		},
	}
  * ```
  */

/**
 * Fetch user data via token
 * @async
 * @function getUserDataForToken
 *
 * @param {string} token - jwt token
 * @param {GetUserDataForTokenOptions} options
 * @returns {Promise<KYCCUserObject>} user object
 * @throws if no instanceUrl in options
 * @throws if no templateId in options
 * @throws if invalid token
 * @throws if invalid user for token
 * @example
 *
 * ```js
 * async sk.kycc.getUserDataForToken(token, options);
 * ```
 */
const getUserDataForToken = async (token, options = {}) => {
  const {
    instanceUrl,
    templateId
  } = options;

  if (!instanceUrl) {
    throw new Error('no_instance');
  }

  if (!token) {
    throw new Error('no_token');
  }

  if (!templateId) {
    throw new Error('no_template_id');
  }

  const fileProcessor = options.fileProcessor || {
    stream: false,
    process: (file, id) => file
  };
  const client = (0, _kyccInternalClient.createClient)({
    instanceUrl,
    jar: _request.default.jar()
  });
  let kyccUser = null;

  try {
    kyccUser = await client.auth.login(token);
  } catch (error) {
    throw new Error('invalid_token');
  }

  if (!kyccUser || !client.auth.validateUserToken(token, kyccUser)) {
    throw new Error('invalid_token');
  }

  const applications = await client.applications.list({
    template_id: templateId
  }, ['id', 'currentStatus']); // TODO: filter inappropriate statuses

  if (!applications || !applications.length) {
    throw new Error('invalid_user');
  }

  const application = await client.applications.get(applications[0].id, ['id', 'attributes', 'currentStatus']);
  const user = {
    id: kyccUser._id
  };
  const attributes = (0, _utils.parseApplicationAttributes)(application.attributes);
  const kyccFileProcessor = (0, _utils.createKyccFileProcessor)(client, fileProcessor);
  const resolvedAttributes = await Promise.all(attributes.map(async attr => {
    const resolvedValue = await (0, _utils2.resolveAttributeFiles)(attr.data, kyccFileProcessor);
    return { ...attr,
      data: resolvedValue
    };
  }));
  user.attributes = (0, _utils2.attributeMapBySchema)(resolvedAttributes);
  return user;
};

exports.getUserDataForToken = getUserDataForToken;