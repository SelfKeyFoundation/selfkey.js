'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports.resolve = void 0;

var _ethereumjsUtil = require('ethereumjs-util');

var _parse = require('../parse');

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

	if (method !== 'eth' || !(0, _ethereumjsUtil.isValidAddress)(idString)) {
		return Promise.reject(new Error('Not a valid eth DID'));
	}

	return Promise.resolve(generateDocument(did, idString));
};

exports.resolve = resolve;
