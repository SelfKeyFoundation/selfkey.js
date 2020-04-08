import rp from 'request-promise-native';
import request from 'request';
import * as JWT from '../jwt';
import KYCC_STATUSES from './kycc-statuses';

export const authValidateUserToken = client => (jwt, user) => {
	const parsed = JWT.parseJWT(jwt);
	return user._id === parsed.payload.sub;
};

export const authLogin = client => async (jwt, options = {}) => {
	const res = await rp.post({
		url: `${client.options.endpoint}/auth/login`,
		body: {
			jwt
		},
		jar: options.jar || client.options.jar,
		json: true
	});
	return res.user;
};

export const applicationsList = client => async (filters = {}, fields = null, options = {}) => {
	const qs = {
		...filters
	};

	if (Array.isArray(fields) && fields.length) {
		fields = fields.join(',');
		qs.fields = fields;
	}
	const res = await rp.get({
		url: `${client.options.endpoint}/applications`,
		jar: options.jar || client.options.jar,
		qs,
		json: true
	});
	return res;
};

export const applicationGet = client => async (applicationId, fields = null, options = {}) => {
	const qs = {};
	if (Array.isArray(fields) && fields.length) {
		fields = fields.join(',');
		qs.fields = fields;
	}
	const res = await rp.get({
		url: `${client.options.endpoint}/applications/${applicationId}`,
		jar: options.jar || client.options.jar,
		qs,
		json: true
	});
	return res;
};

export const fileGet = client => (fileId, options = {}) => {
	const r = client.options.streamFile || options.stream ? request : rp;
	return r.get({
		url: `${client.options.endpoint}/files/${fileId}`,
		jar: options.jar || client.options.jar
	});
};

export const createClient = (options = {}) => {
	const { instanceUrl } = options;
	const clientOpts = { endpoint: `${instanceUrl}/api/v2` };
	if (options.jar) {
		clientOpts.jar = options.jar === true ? rp.jar() : options.jar;
	}
	const client = {
		options: clientOpts
	};
	client.auth = {
		login: authLogin(client),
		validateUserToken: authValidateUserToken(client)
	};
	client.applications = {
		get: applicationGet(client),
		list: applicationsList(client)
	};
	client.files = {
		get: fileGet(client)
	};
	client.statuses = KYCC_STATUSES;
	return client;
};

export default createClient;
