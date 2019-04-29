'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports.registerMethodResolver = exports.resolve = exports.isSupported = void 0;

var _parse = require('./parse');

var _eth_resolver = require('./methods/eth_resolver');

var _selfkey_resolver = require('./methods/selfkey_resolver');

const resolvers = {
	eth: (0, _eth_resolver.resolver)(),
	selfkey: (0, _selfkey_resolver.resolver)()
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
		throw new Error('Unsupported DID method');
	}

	return resolver.resolve(did);
};

exports.resolve = resolve;

const registerMethodResolver = (method, resolver) => {
	// TODO - Check if resolver adheres to interface
	resolvers[method] = resolver;
};

exports.registerMethodResolver = registerMethodResolver;
