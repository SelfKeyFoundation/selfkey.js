'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports.resolver = void 0;

var _parse = require('../parse');

var _selfkeySimpleResolver = require('./selfkey-simple-resolver');

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

const resolver = () => ({
	resolve: async did => {
		const { method, idString, params } = (0, _parse.parse)(did);

		if (method !== 'selfkey' || !isValidIdentifier(idString)) {
			throw new Error('Not a valid selfkey DID');
		}

		const chain = !params
			? 'mainnet'
			: !params['selfkey:chain']
			? 'mainnet'
			: params['selfkey:chain'];
		const address = await (0, _selfkeySimpleResolver.getControllerAddress)(idString, chain);
		return generateDocument(did, address);
	}
});

exports.resolver = resolver;
