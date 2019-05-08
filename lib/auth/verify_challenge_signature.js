'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports.registerVerifier = exports.verifyChallengeSignature = void 0;

var _resolver = require('../did/resolver');

var _secp256k1_ = require('./crypto/secp256k1_2018');

const verifiers = {
	Secp256k1VerificationKey2018: (0, _secp256k1_.verifier)()
};

const verifyChallengeSignature = async (nonce, signature, did) => {
	const { value, keyId } = signature;
	const { authentication, publicKey } = await (0, _resolver.resolve)(did);

	if (!authentication || !authentication.includes(keyId)) {
		throw new Error('Invalid key usage');
	}

	const authKey = (publicKey || []).find(({ id }) => id === keyId);

	if (!authKey) {
		throw new Error(`Missing public key: ${keyId}`);
	}

	const verifier = verifiers[authKey.type];

	if (!verifier) {
		throw new Error(`Unsupported Public Key type: ${authKey.type}`);
	}

	return verifier.verify(nonce, value, authKey);
};

exports.verifyChallengeSignature = verifyChallengeSignature;

const registerVerifier = (type, verifier) => {
	// TODO - Check if resolver adheres to interface
	verifiers[type] = verifier;
};

exports.registerVerifier = registerVerifier;
