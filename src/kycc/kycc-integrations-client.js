import rp from 'request-promise-native';
import request from 'request';
import KYCC_STATUSES from './kycc-statuses';
/**
 * @module kycc/kycc-integrations-client
 */

/**
 * @function listUsersFn
 * @async
 * @param {object} filters
 * @param {string[]} fields
 * @returns {Promise<KYCCUser[]>} users
 * @example
 *  ```js
 * const users = await kyccClient.users.list();
 * ```
 */
export const usersList = client => async (filters = {}, fields = null) => {
	const qs = {
		...filters
	};

	if (Array.isArray(fields) && fields.length) {
		fields = fields.join(',');
		qs.fields = fields;
	}
	const res = await rp.get({
		url: `${client.options.endpoint}/users`,
		headers: {
			apiKey: client.options.apiKey
		},
		qs,
		json: true
	});
	return res.items;
};

/**
 * @function getUserFn
 * @async
 * @param {string} userId
 * @param {string[]} fields
 * @returns {Promise<KYCCUser>} user
 * @example
 *  ```js
 * const user = await kyccClient.users.get("asdasdasdas");
 * ```
 */
export const userGet = client => async (userId, fields = null) => {
	const qs = {};
	if (Array.isArray(fields) && fields.length) {
		fields = fields.join(',');
		qs.fields = fields;
	}
	const res = await rp.get({
		url: `${client.options.endpoint}/users/${userId}`,
		headers: {
			apiKey: client.options.apiKey
		},
		qs,
		json: true
	});
	return res;
};

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
export const applicationsList = client => async (filters = {}, fields = null) => {
	const qs = {
		...filters
	};

	if (Array.isArray(fields) && fields.length) {
		fields = fields.join(',');
		qs.fields = fields;
	}
	const res = await rp.get({
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
export const applicationGet = client => async (applicationId, fields = null) => {
	const qs = {};
	if (Array.isArray(fields) && fields.length) {
		fields = fields.join(',');
		qs.fields = fields;
	}
	const res = await rp.get({
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
export const applicationChangeStatus = client => async (applicationId, code, note = null) => {
	const body = { code };
	if (note) {
		body.note = note;
	}
	const res = await rp.post({
		url: `${client.options.endpoint}/applications/${applicationId}/status_changes`,
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

export const applicationInvalidateAttributes = client => async (applicationId, attributes = []) => {
	const qs = { attributes };
	const res = await rp.post({
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
export const applicationInvalidateQuestions = client => async (applicationId, questions = []) => {
	const qs = { questions };
	const res = await rp.post({
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
export const applicationCreateQuestion = client => async (applicationId, question) => {
	const res = await rp.post({
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
export const applicationCreateAttribute = client => async (applicationId, attribute) => {
	const res = await rp.post({
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
export const updateApplication = client => async (applicationId, update) => {
	const res = await rp.patch({
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
export const fileGet = client => (fileId, options = {}) => {
	const r = client.options.streamFile || options.stream ? request : rp;
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
export const createClient = (options = {}) => {
	const { instanceUrl, apiKey } = options;
	const clientOpts = { endpoint: `${instanceUrl}/integrations/v2`, apiKey };
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
	client.users = {
		list: usersList(client),
		get: userGet(client)
	};
	client.files = {
		get: fileGet(client)
	};
	client.statuses = KYCC_STATUSES;
	return client;
};

export default createClient;
