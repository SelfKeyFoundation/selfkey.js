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
function createSignature(nonce, privateKey) {
	const msgHash = ethUtil.hashPersonalMessage(Buffer.from(nonce, 'hex'))
	let s = ethUtil.ecsign(msgHash, Buffer.from(privateKey, 'hex'))
	s = { ...s }
	s.r = s.r.toString('hex')
	s.s = s.s.toString('hex')
	const signature = Buffer.from(JSON.stringify(s), 'utf8').toString('base64')
	return signature
}

// verifies the signature using the generated nonce
// checks that the user requested and signature resolved public keys match
function verifySignature(nonce, signature, publicKey) {
	const msgHash = ethUtil.hashPersonalMessage(Buffer.from(nonce, 'hex'))
	const p = JSON.parse(Buffer.from(signature, 'base64'))
	const v = p.v
	const r = Buffer.from(p.r, 'hex')
	const s = Buffer.from(p.s, 'hex')
	const signatureRecover = ethUtil.ecrecover(msgHash, v, r, s).toString('hex')
	const signaturePublicKey = ethUtil.publicToAddress(Buffer.from(signatureRecover, 'hex'), true).toString('hex')
	if (signaturePublicKey === publicKey) {
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
