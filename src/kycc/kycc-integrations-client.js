import rp from 'request-promise-native';
import request from 'request';

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

export const applicationChangeStatus = client => async (applicationId, code, note = null) => {
	const body = { code };
	if (note) {
		body.note = note;
	}
	const res = await rp.post({
		url: `${client.options.endpoint}/applications/${applicationId}/change_status`,
		headers: {
			apiKey: client.options.apiKey
		},
		body,
		json: true
	});
	return res;
};

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

export const applicationInvalidateQuestions = client => async (applicationId, questions = []) => {
	const qs = { questions };
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

// Question fields:
// - description (str)
// - label (str)
// - question (str)
// - optional (boolean)
// - options (array of strings for select options)
// - type: one of: input, checkbox, select, date
export const applicationCreateQuestion = client => async (applicationId, question) => {
	const res = await rp.post({
		url: `${client.options.endpoint}/applications/${applicationId}/question`,
		headers: {
			apiKey: client.options.apiKey
		},
		body: question,
		json: true
	});
	return res;
};

// Attribute fields:
// - description
// - label
// - optional
// - scheme (json schema id, one of https://platform.selfkey.org/repository.json)
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

export const createClient = (options = {}) => {
	const { instanceUrl, apiKey } = options;
	const clientOpts = { endpoint: `${instanceUrl}/integrations/v2`, apiKey };
	const client = {
		options: clientOpts
	};
	client.applications = {
		list: applicationsList(client),
		get: applicationGet(client),
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
	return client;
};

export default createClient;
