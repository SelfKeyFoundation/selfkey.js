'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports.default = exports.createClient = exports.fileGet = exports.applicationGet = exports.applicationsList = void 0;

var _requestPromiseNative = _interopRequireDefault(require('request-promise-native'));

var _request = _interopRequireDefault(require('request'));

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

const applicationsList = client => async (filters = {}, fields = null) => {
	const qs = { ...filters };

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

exports.applicationGet = applicationGet;

const fileGet = client => (fileId, options = {}) => {
	let r =
		client.options.streamFile || options.stream
			? _request.default
			: _requestPromiseNative.default;
	return r.get({
		url: `${client.options.endpoint}/files/${fileId}`,
		headers: {
			apiKey: client.options.apiKey
		}
	});
};

exports.fileGet = fileGet;

const createClient = (options = {}) => {
	const { instanceUrl, apiKey } = options;
	const clientOpts = {
		endpoint: `${instanceUrl}/integrations/v2`,
		apiKey
	};
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

exports.createClient = createClient;
var _default = createClient;
exports.default = _default;
