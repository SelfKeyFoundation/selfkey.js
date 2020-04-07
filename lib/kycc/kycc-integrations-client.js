"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.createClient = exports.fileGet = exports.updateApplication = exports.applicationCreateAttribute = exports.applicationCreateQuestion = exports.applicationInvalidateQuestions = exports.applicationInvalidateAttributes = exports.applicationChangeStatus = exports.applicationGet = exports.applicationsList = void 0;

var _requestPromiseNative = _interopRequireDefault(require("request-promise-native"));

var _request = _interopRequireDefault(require("request"));

var _kyccStatuses = _interopRequireDefault(require("./kycc-statuses"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module kycc/kycc-integrations-client
 */

/**
 * @function listApplicationsFn
 * @async
 * @param {object} filters
 * @param {string[]} fields
 * @returns {Promise<KYCCApplication[]>} applications
 * @example
 *  ```js
 * const applications = await kyccClient.applications.list({templateId: 'sdasdasdsaa'}, ['managers', 'currentStatus']);
 * ```
 */
const applicationsList = client => async (filters = {}, fields = null) => {
  const qs = { ...filters
  };

  if (Array.isArray(fields) && fields.length) {
    fields = fields.join(',');
    qs.fields = fields;
  }

  const res = await _requestPromiseNative.default.get({
    url: `${client.options.endpoint}/applications`,
    headers: {
      apiKey: client.options.apiKey
    },
    qs,
    json: true
  });
  return res.items;
};
/**
 * @function getApplicationFn
 * @async
 * @param {string} applicationID
 * @param {string[]} fields
 * @returns {Promise<KYCCApplication>} application
 * @example
 *  ```js
 * const application = await kyccClient.applications.get("asdasdasdas");
 * ```
 */


exports.applicationsList = applicationsList;

const applicationGet = client => async (applicationId, fields = null) => {
  const qs = {};

  if (Array.isArray(fields) && fields.length) {
    fields = fields.join(',');
    qs.fields = fields;
  }

  const res = await _requestPromiseNative.default.get({
    url: `${client.options.endpoint}/applications/${applicationId}`,
    headers: {
      apiKey: client.options.apiKey
    },
    qs,
    json: true
  });
  return res;
};
/**
 * @function changeApplicationStatusFn
 * @async
 * @param {string} applicationID
 * @param {integer} statusCode
 * @param {string} note (optional)
 * @returns {Promise<KYCCApplication>} updated application
 * @example
 *  ```js
 * const application = await kyccClient.applications.changeStatus("asdasdasdas", 8, 'testing status change');
 * ```
 */


exports.applicationGet = applicationGet;

const applicationChangeStatus = client => async (applicationId, code, note = null) => {
  const body = {
    code
  };

  if (note) {
    body.note = note;
  }

  const res = await _requestPromiseNative.default.post({
    url: `${client.options.endpoint}/applications/${applicationId}/change_status`,
    headers: {
      apiKey: client.options.apiKey
    },
    body,
    json: true
  });
  return res;
};
/**
 * @function invalidateApplicationAttributesFn
 * @async
 * @param {string} applicationID
 * @param {string[]} attributes - a list of attribute ids
 * @returns {Promise<string>} OK/Error
 * @example
 *  ```js
 * await kyccClient.applications.attributes.invalidate("asdasdasdas", ["sdasdasdsa", "dsadasdasdasd"]);
 * ```
 */


exports.applicationChangeStatus = applicationChangeStatus;

const applicationInvalidateAttributes = client => async (applicationId, attributes = []) => {
  const qs = {
    attributes
  };
  const res = await _requestPromiseNative.default.post({
    url: `${client.options.endpoint}/applications/${applicationId}/attributes/invalidate`,
    headers: {
      apiKey: client.options.apiKey
    },
    qs,
    json: true
  });
  return res;
};
/**
 * @function invalidateApplicationQuestionsFn
 * @async
 * @param {string} applicationID
 * @param {string[]} questions - a list of question ids
 * @returns {Promise<string>} OK/Error
 * @example
 *  ```js
 * await kyccClient.applications.questions.invalidate("asdasdasdas", ["sdasdasdsa", "dsadasdasdasd"]);
 * ```
 */


exports.applicationInvalidateAttributes = applicationInvalidateAttributes;

const applicationInvalidateQuestions = client => async (applicationId, questions = []) => {
  const qs = {
    questions
  };
  const res = await _requestPromiseNative.default.post({
    url: `${client.options.endpoint}/applications/${applicationId}/questions/invalidate`,
    headers: {
      apiKey: client.options.apiKey
    },
    qs,
    json: true
  });
  return res;
};
/**
 * @typedef KYCCQuestion
 * @property {string} description
 * @property {string} label
 * @property {string} question
 * @property {boolean} optional
 * @property {string[]} options - for select
 * @property {string} type - one of: input, checkbox, select, date
 */

/**
 * @function addApplicationQuestionFn
 * @async
 * @param {string} applicationID
 * @param {KYCCQuestion} question
 * @returns {Promise<string>} Created/Error
 * @example
 *  ```js
 * await kyccClient.applications.questions.add("asdasdasdas", {
 *  description: "test question",
 *  label: 'test',
 *  question: 'what would you say about test?'
 *  optional: false
 * });
 * ```
 */


exports.applicationInvalidateQuestions = applicationInvalidateQuestions;

const applicationCreateQuestion = client => async (applicationId, question) => {
  const res = await _requestPromiseNative.default.post({
    url: `${client.options.endpoint}/applications/${applicationId}/questions`,
    headers: {
      apiKey: client.options.apiKey
    },
    body: question,
    json: true
  });
  return res;
};
/**
 * @typedef KYCCAttribute
 * @property {string} description
 * @property {string} label
 * @property {boolean} optional
 * @property {string} schema - json schema id, one of https://platform.selfkey.org/repository.json
 */

/**
 * @function addApplicationAttributeFn
 * @async
 * @param {string} applicationID
 * @param {KYCCAttribute} attribute
 * @returns {Promise<string>} Created/Error
 * @example
 *  ```js
 * await kyccClient.applications.attributes.add("asdasdasdas", {
 *  description: "test attribute",
 *  label: 'test',
 *  schema: 'http://platform.selfkey.org/schema/attribute/fingerprint.json'
 *  optional: false
 * });
 * ```
 */


exports.applicationCreateQuestion = applicationCreateQuestion;

const applicationCreateAttribute = client => async (applicationId, attribute) => {
  const res = await _requestPromiseNative.default.post({
    url: `${client.options.endpoint}/applications/${applicationId}/attributes`,
    headers: {
      apiKey: client.options.apiKey
    },
    body: attribute,
    json: true
  });
  return res;
};
/**
 * @function updateApplicationFn
 * @async
 * @param {string} applicationID
 * @param {object} update - application update object
 * @returns {Promise<KYCCApplication>} updated application
 * @example
 *  ```js
 * await kyccClient.applications.update("asdasdasdas", {
 *  attributes: {
 * 		"sdasdasdsa": { value: 'updated value' }
 * 	}
 * });
 * ```
 */


exports.applicationCreateAttribute = applicationCreateAttribute;

const updateApplication = client => async (applicationId, update) => {
  const res = await _requestPromiseNative.default.patch({
    url: `${client.options.endpoint}/applications/${applicationId}`,
    headers: {
      apiKey: client.options.apiKey
    },
    body: update,
    json: true
  });
  return res;
};
/**
 * @function getFileFn
 * @async
 * @param {string} fileId
 * @param {object} options
 * @returns {Promise<KYCCApplicationFile>} file contents
 * @example
 *  ```js
 * await kyccClient.files.get("asdasdasdas");
 * ```
 */


exports.updateApplication = updateApplication;

const fileGet = client => (fileId, options = {}) => {
  const r = client.options.streamFile || options.stream ? _request.default : _requestPromiseNative.default;
  return r.get({
    url: `${client.options.endpoint}/files/${fileId}`,
    headers: {
      apiKey: client.options.apiKey
    },
    encoding: null
  });
};
/**
 * KYC-Chain application object
 * @typedef KYCCApplication
 */

/**
 * KYC-Chain integrations api client
 * @typedef KYCCIntegrationsApiClient
 * @property {listApplicationsFn} applications.list
 * @property {getApplicationFn} applications.get
 * @property {updateApplicationFn} applications.update
 * @property {changeApplicationStatusFn} applications.changeStatus
 * @property {addApplicationAttributeFn} applications.attributes.add
 * @property {invalidateApplicationAttributesFn} applications.attributes.invalidate
 * @property {addApplicationQuestionFn} applications.questions.add
 * @property {invalidateApplicationQuestionsFn} applications.questions.invalidate
 * @property {getFileFn} files.get
 * @returns {KYCCApplication[]}
 * @example
 *  ```js
 * const applicationId = "some application id";
 * const application = await kyccClient.applications.get(applicationId);
 * await kyccClient.applications.changeStatus(applicationId, kyccClient.statuses.APPROVED);
 * ```
 */

/**
 * Options used in createKYCCIntegrationsClient function
 * @typedef {Object} KYCCIntegrationsApiOptions
 * @property {string} instanceUrl
 * @property {string} apiKey
 */

/**
 * Create KYC-Chain integrations api client
 * @function createClient
 * @alias createKYCCIntegrationsClient
 * @param {KYCCIntegrationsApiOptions} options
 * @returns {KYCCIntegrationsApiClient}
 * @example
 *
 * ```js
 * const kyccClient = async sk.kycc.createKYCCIntegrationsClient(options);
 * ```
 */


exports.fileGet = fileGet;

const createClient = (options = {}) => {
  const {
    instanceUrl,
    apiKey
  } = options;
  const clientOpts = {
    endpoint: `${instanceUrl}/integrations/v2`,
    apiKey
  };
  const client = {
    options: clientOpts
  };
  client.applications = {
    list: applicationsList(client),
    get: applicationGet(client),
    update: updateApplication(client),
    changeStatus: applicationChangeStatus(client),
    attributes: {
      add: applicationCreateAttribute(client),
      invalidate: applicationInvalidateAttributes(client)
    },
    questions: {
      add: applicationCreateQuestion(client),
      invalidate: applicationInvalidateQuestions(client)
    }
  };
  client.files = {
    get: fileGet(client)
  };
  client.statuses = _kyccStatuses.default;
  return client;
};

exports.createClient = createClient;
var _default = createClient;
exports.default = _default;