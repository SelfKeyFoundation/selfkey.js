/**
 * Module dependencies
 */
const 
	ethUtil = require('ethereumjs-util')
	nonce = require('nonce-generator')


// verifies the signature using the generated nonce
// checks that the user requested and signature resolved public key match correctly
function verifySignature(nonce, signature, pubKey) {
	const 
		msgHash = ethUtil
			.hashPersonalMessage(Buffer.from(nonce, 'hex'))
		p = JSON.parse(signature)
		v = p.v
		r = Buffer.from(p.r, 'hex')
		s = Buffer.from(p.s, 'hex')
		sigRecover = ethUtil
			.ecrecover(msgHash, v, r, s)
			.toString('hex')
		sigPubKey = ethUtil
			.publicToAddress(Buffer.from(sigRecover, 'hex'), true)
			.toString('hex')
	if (sigPubKey == pubKey) {
		return true
	} else {
		return false
	}
}

// promised version of above
function verifySignaturePromise(nonce, signature, pubKey) {
	return new Promise((resolve, reject) => {
		const 
			msgHash = ethUtil
				.hashPersonalMessage(Buffer.from(nonce, 'hex'))
			p = JSON.parse(signature)
			v = p.v
			r = Buffer.from(p.r, 'hex')
			s = Buffer.from(p.s, 'hex')
			sigRecover = ethUtil
				.ecrecover(msgHash, v, r, s)
				.toString('hex')
			sigPubKey = ethUtil
				.publicToAddress(Buffer.from(sigRecover, 'hex'), true)
				.toString('hex')
		if (sigPubKey == pubKey) {
			resolve(true)
		} else {
			reject({
				status: 400,
				msg: 'Signature does not match public key'
			})
		}
	})
}

// hash the nonce and create the signature
function signChallenge(nonce, privKey) {
	const 
		msgHash = ethUtil
			.hashPersonalMessage(Buffer.from(nonce, 'hex')) 
		signature = ethUtil
			.ecsign(msgHash, Buffer.from(privKey, 'hex'))
	return signature
}

// promised version of above
function signChallengePromise(nonce, privKey) {
	return new Promise(resolve => {
		const 
			msgHash = ethUtil
				.hashPersonalMessage(Buffer.from(nonce, 'hex'))
			signature = ethUtil
				.ecsign(msgHash, Buffer.from(privKey, 'hex'))
		resolve(signature)
	})
}

function nonce(b) {
	return nonce(b)
}

/**
 * Expose functions directly from package
 */
exports = module.exports = {
	verifySignature,
	verifySignaturePromise,
	signChallenge,
	signChallengePromise,
	nonce
}
