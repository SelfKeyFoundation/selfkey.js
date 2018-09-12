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

// hash the nonce and create the signature convert to base64
function createSignature(nonce, privKey) {
	const msgHash = ethUtil.hashPersonalMessage(Buffer.from(nonce, 'hex'))
	let sig = ethUtil.ecsign(msgHash, Buffer.from(privKey, 'hex'))
	sig = { ...sig }
	sig.r = sig.r.toString('hex')
	sig.s = sig.s.toString('hex')
	return Buffer.from(JSON.stringify(sig), 'utf8').toString('base64')
}

// verifies the signature using the generated nonce
// checks that the user requested and signature resolved public keys match
function verifySignature(nonce, signature, pubKey) {
	const msgHash = ethUtil.hashPersonalMessage(Buffer.from(nonce, 'hex'))
	const p = JSON.parse(Buffer.from(signature, 'base64'))
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

// resolves a DID
function didResolver(did) {
	return selfkeyResolver(did)
}

exports = module.exports = {
	createNonce,
	createSignature,
	verifySignature,
	didResolver
}
