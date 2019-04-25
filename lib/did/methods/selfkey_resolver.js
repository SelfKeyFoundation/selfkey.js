'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports.resolve = void 0;

var _parse = require('../parse');

var _selfkey_simple_resolver = require('./selfkey_simple_resolver');

const isValidIdentifier = idString => {
	return !!idString.match(/^0x[0-9a-fA-F]{64}$/);
};

const generateDocument = (did, address) => ({
	'@context': 'https://www.w3.org/2019/did/v1',
	id: did,
	publicKey: [
		{
			id: `${did}#keys-1`,
			type: 'Secp256k1VerificationKey2018',
			controller: did,
			ethereumAddress: address
		}
	],
	authentication: [`${did}#keys-1`]
});

const resolve = async did => {
	const { method, idString } = (0, _parse.parse)(did);

	if (method !== 'selfkey' || !isValidIdentifier(idString)) {
		return Promise.reject(new Error('Not a valid selfkey DID'));
	}

	const address = await (0, _selfkey_simple_resolver.getControllerAddress)(idString);
	return Promise.resolve(generateDocument(did, address));
};

exports.resolve = resolve;
