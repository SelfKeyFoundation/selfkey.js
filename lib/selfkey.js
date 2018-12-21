'use strict';

const nonceGenerator = require('nonce-generator');
const ethUtil = require('ethereumjs-util');

// generates a cryptographic nonce
function createNonce(length) {
	return nonceGenerator(length);
}

// hash the nonce and create the signature convert to base64
function createSignature(nonce, privateKey) {
	const msgHash = ethUtil.hashPersonalMessage(Buffer.from(nonce, 'hex'));
	let s = ethUtil.ecsign(msgHash, Buffer.from(privateKey, 'hex'));
	return ethUtil.toRpcSig(s.v, s.r, s.s);
}

// verifies the signature using the generated nonce
// checks that the user requested and signature resolved public keys match
function verifySignature(nonce, signature, publicKey) {
	const msgHash = ethUtil.hashPersonalMessage(Buffer.from(nonce, 'hex'));
	const sig = ethUtil.fromRpcSig(signature);
	const signatureRecover = ethUtil.ecrecover(msgHash, sig.v, sig.r, sig.s);
	const signaturePublicKey = ethUtil.publicToAddress(signatureRecover, true).toString('hex');
	return signaturePublicKey === publicKey;
}

module.exports = {
	createNonce,
	createSignature,
	verifySignature,
};
