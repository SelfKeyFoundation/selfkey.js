'use strict'

const fs = require('fs')
const path = require('path')
const selfkeyResolver = require('selfkey-did-resolver')
const ethUtil = require('ethereumjs-util')
const nonceGenerator = require('nonce-generator')

// generates a cryptographic nonce
function createNonce(length) {
	return nonceGenerator(length)
}

// hash the nonce and create the signature
function createSignature(nonce, privKey) {
	const msgHash = ethUtil.hashPersonalMessage(Buffer.from(nonce, 'hex')) 
	const signature = ethUtil.ecsign(msgHash, Buffer.from(privKey, 'hex'))
	return signature
}

// promised version of above
function createSignaturePromise(nonce, privKey) {
	return new Promise(resolve => {
		const msgHash = ethUtil.hashPersonalMessage(Buffer.from(nonce, 'hex'))
		const signature = ethUtil.ecsign(msgHash, Buffer.from(privKey, 'hex'))
		resolve(signature)
	})
}

// verifies the signature using the generated nonce
// checks that the user requested and signature resolved public key match correctly
function verifySignature(nonce, signature, pubKey) {
	const msgHash = ethUtil.hashPersonalMessage(Buffer.from(nonce, 'hex'))
	const p = JSON.parse(signature)
	const v = p.v
	const r = Buffer.from(p.r, 'hex')
	const s = Buffer.from(p.s, 'hex')
	const sigRecover = ethUtil.ecrecover(msgHash, v, r, s).toString('hex')
	const sigPubKey = ethUtil.publicToAddress(Buffer.from(sigRecover, 'hex'), true).toString('hex')
	if (sigPubKey == pubKey) {
		return true
	} else {
		return false
	}
}

// promised version of above
function verifySignaturePromise(nonce, signature, pubKey) {
	return new Promise((resolve, reject) => {
		const msgHash = ethUtil.hashPersonalMessage(Buffer.from(nonce, 'hex'))
		const p = JSON.parse(signature)
		const v = p.v
		const r = Buffer.from(p.r, 'hex')
		const s = Buffer.from(p.s, 'hex')
		const sigRecover = ethUtil.ecrecover(msgHash, v, r, s).toString('hex')
		const sigPubKey = ethUtil.publicToAddress(Buffer.from(sigRecover, 'hex'), true).toString('hex')
		if (sigPubKey == pubKey) {
			resolve(true)
		} else {
			reject(false)
		}
	})
}

// resolves a DID
function didResolver(did) {
	return selfkeyResolver(did)
}

exports = module.exports = {
	createNonce,
	createSignature,
	createSignaturePromise,
	verifySignature,
	verifySignaturePromise,
	didResolver
}
