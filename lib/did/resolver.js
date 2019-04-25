'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports.registerMethodResolver = exports.resolve = exports.isSupported = void 0;

var _parse = require('./parse');

var eth = _interopRequireWildcard(require('./methods/eth_resolver'));

var selfkey = _interopRequireWildcard(require('./methods/selfkey_resolver'));

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

const resolvers = {
	eth,
	selfkey
};

const isSupported = did => {
	const { method } = (0, _parse.parse)(did);
	return Object.keys(resolvers).includes(method);
};

exports.isSupported = isSupported;

const resolve = async did => {
	const { method } = (0, _parse.parse)(did);
	const resolver = resolvers[method];

	if (!resolver) {
		return Promise.reject(new Error('Unsupported DID method'));
	}

	return resolver.resolve(did);
};

exports.resolve = resolve;

const registerMethodResolver = (method, resolver) => {
	// TODO - Check if resolver adheres to interface
	resolvers[method] = resolver;
};

exports.registerMethodResolver = registerMethodResolver;
