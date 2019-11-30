'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports.default = exports.createClient = exports.fileGet = exports.applicationGet = exports.applicationsList = exports.authLogin = exports.authValidateUserToken = void 0;

var _requestPromiseNative = _interopRequireDefault(require('request-promise-native'));

var _request = _interopRequireDefault(require('request'));

var JWT = _interopRequireWildcard(require('../jwt'));

function _interopRequireWildcard(obj) {
	if (obj && obj.__esModule) {
		return obj;
	} else {
		var newObj = {};
		if (obj != null) {
			for (var key in obj) {
				if (Object.prototype.hasOwnProperty.call(obj, key)) {
					var desc =
						Object.defineProperty && Object.getOwnPropertyDescriptor
							? Object.getOwnPropertyDescriptor(obj, key)
							: {};
					if (desc.get || desc.set) {
						Object.defineProperty(newObj, key, desc);
					} else {
						newObj[key] = obj[key];
					}
				}
			}
		}
		newObj.default = obj;
		return newObj;
	}
}

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

const authValidateUserToken = client => async (jwt, options = {}) => {
	const parsed = JWT.parseJWT(jwt);
	const user = await client.auth.login(jwt, options);
	return user._id === parsed.payload.sub;
};

exports.authValidateUserToken = authValidateUserToken;

const authLogin = client => async (jwt, options = {}) => {
	const res = await _requestPromiseNative.default.post({
		url: `${client.options.endpoint}/auth/login`,
		body: {
			jwt
		},
		jar: options.jar || client.options.jar,
		json: true
	});
	return res.user;
};

exports.authLogin = authLogin;

const applicationsList = client => async (filters = {}, fields = null, options = {}) => {
	const qs = { ...filters };

	if (Array.isArray(fields) && fields.length) {
		fields = fields.join(',');
		qs.fields = fields;
	}

	const res = await _requestPromiseNative.default.get({
		url: `${client.options.endpoint}/applications`,
		jar: options.jar || client.options.jar,
		qs,
		json: true
	});
	return res;
};

exports.applicationsList = applicationsList;

const applicationGet = client => async (applicationId, fields = null, options = {}) => {
	const qs = {};

	if (Array.isArray(fields) && fields.length) {
		fields = fields.join(',');
		qs.fields = fields;
	}

	const res = await _requestPromiseNative.default.get({
		url: `${client.options.endpoint}/applications/${applicationId}`,
		jar: options.jar || client.options.jar,
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
		jar: options.jar || client.options.jar
	});
};

exports.fileGet = fileGet;

const createClient = (options = {}) => {
	const { instanceUrl } = options;
	const clientOpts = {
		endpoint: `${instanceUrl}/api/v2`
	};

	if (options.jar) {
		clientOpts.jar = options.jar === true ? _requestPromiseNative.default.jar() : options.jar;
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
	return client;
};

exports.createClient = createClient;
var _default = createClient;
exports.default = _default;
