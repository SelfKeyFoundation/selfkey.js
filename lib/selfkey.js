'use strict'

const fs = require('fs')
const path = require('path')
const selfkeyResolver = require('selfkey-did-resolver')
const ethUtil = require('ethereumjs-util')
const nonceGenerator = require('nonce-generator')

// resolve the DID
async function didResolver(did) {
	return selfkeyResolver(did)
}

// verifies the signature using the generated challenge
// checks that the user requested and signature resolved public key match correctly
function verifySignature(challenge, signature, pubKey) {
	const msgHash = ethUtil
		.hashPersonalMessage(Buffer.from(challenge, 'hex'))
	const p = JSON.parse(signature)
	const v = p.v
	const r = Buffer.from(p.r, 'hex')
	const s = Buffer.from(p.s, 'hex')
	const sigRecover = ethUtil
		.ecrecover(msgHash, v, r, s)
		.toString('hex')
	const sigPubKey = ethUtil
		.publicToAddress(Buffer.from(sigRecover, 'hex'), true)
		.toString('hex')
	if (sigPubKey == pubKey) {
		return true
	} else {
		return false
	}
}

// promised version of above
function verifySignaturePromise(challenge, signature, pubKey) {
	return new Promise((resolve, reject) => {
		const msgHash = ethUtil
			.hashPersonalMessage(Buffer.from(challenge, 'hex'))
		const p = JSON.parse(signature)
		const v = p.v
		const r = Buffer.from(p.r, 'hex')
		const s = Buffer.from(p.s, 'hex')
		const sigRecover = ethUtil
			.ecrecover(msgHash, v, r, s)
			.toString('hex')
		const sigPubKey = ethUtil
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

// new signature function w/ claim object 
function createChallenge(claim, privKey) {
	const msgHash = ethUtil
		.hashPersonalMessage(Buffer.from(claim, 'hex')) 
	const signature = ethUtil
		.ecsign(msgHash, Buffer.from(privKey, 'hex'))
	return signature
}

// hash the challenge and create the signature
function signChallenge(challenge, privKey) {
	const msgHash = ethUtil
		.hashPersonalMessage(Buffer.from(challenge, 'hex')) 
	const signature = ethUtil
		.ecsign(msgHash, Buffer.from(privKey, 'hex'))
	return signature
}

// promised version of above
function signChallengePromise(challenge, privKey) {
	return new Promise(resolve => {
		const msgHash = ethUtil
			.hashPersonalMessage(Buffer.from(challenge, 'hex'))
		const signature = ethUtil
			.ecsign(msgHash, Buffer.from(privKey, 'hex'))
		resolve(signature)
	})
}

function newChallenge(length) {
	return nonceGenerator(length)
}

exports = module.exports = {
	didResolver,
	verifySignature,
	verifySignaturePromise,
	newChallenge,
	signChallenge,
	signChallengePromise,
	newChallenge
}
