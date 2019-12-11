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

export const fileGet = client => (fileId, options = {}) => {
	let r = client.options.streamFile || options.stream ? request : rp;
	return r.get({
		url: `${client.options.endpoint}/files/${fileId}`,
		headers: {
			apiKey: client.options.apiKey
		}
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
		get: applicationGet(client)
	};
	client.files = {
		get: fileGet(client)
	};
	return client;
};

export default createClient;
