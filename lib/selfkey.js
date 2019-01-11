'use strict';

const nonce = require('crypto').randomBytes
const ethUtil = require('ethereumjs-util')
const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.SK_JWT_SECRET

// check if valid ethereum public key
function checkValid(publicKey) {
	if (ethUtil.isValidPublic(Buffer.from(publicKey, 'hex')) === true) {
		return true
	} else {
		return false
	}
}

// create a new JWT
function newJWT(publicKey) {
	// reject invalid public key
	 if (!checkValid(publicKey)) {
	 	return { status: 400, code: 'invalid_public_key', message: 'Invalid public key provided', pubKey: publicKey }
	}
	// generates a cryptographic nonce
	let challenge = nonce(48).toString('hex')
	// create JWT with challenge, pubkey and timestamps
	let jwtToken = jwt.sign({ challenge }, JWT_SECRET, { expiresIn: '5m', subject: publicKey })
	// returns complete JWT
	return { status: 200, jwt: jwtToken }
}

// hash the nonce and create the signature convert to base64
function createSignature(challenge, privateKey) {
	const msgHash = ethUtil.hashPersonalMessage(Buffer.from(challenge, 'hex'))
	let s = ethUtil.ecsign(msgHash, Buffer.from(privateKey, 'hex'))
	return ethUtil.toRpcSig(s.v, s.r, s.s)
}

// verifies the signature using the generated nonce
// checks that the user requested and signature resolved public keys match
function verifySignature(challenge, signature, publicKey) {
	const msgHash = ethUtil.hashPersonalMessage(Buffer.from(challenge))
	const sig = ethUtil.fromRpcSig(signature)
	const signatureRecover = ethUtil.ecrecover(msgHash, sig.v, sig.r, sig.s)
	const signaturePublicKey = ethUtil.publicToAddress(signatureRecover, true).toString('hex')
	return signatureRecover.toString('hex')
}

// LIB
function denormalizeDocumentsSchema(typeSchema, value, documents, maxDepth) {
	if (maxDepth < 0) {
		return { value, documents }
	}
	documents = [...documents]
	if (typeSchema.format === 'file') {
		if (!value || typeof value !== 'string') return { value, documents }
		const refIdRegexp = /#ref{(document[0-9]+).id}$/
		const idRegexp = /\$document-([0-9]+)$/
		let id = value.match(refIdRegexp)
		if (!id) id = value.match(idRegexp)
		if (id && id.length) {
			id = id[1]
		}
		if (!id) return { value: null, documents }
		let found = documents.filter(doc => doc.id === +id || doc['#id'] === id)
		let filtered = documents.filter(doc => doc.id !== +id && doc['#id'] !== id)
		value = null
		if (found.length) {
			value = found[0]
			delete value['#id']
		}
		return { value, documents: filtered }
	}
	if (typeSchema.type === 'object' && typeof value === 'object') {
		if (!typeSchema.properties) return { value, documents }
		return Object.keys(typeSchema.properties).reduce(
			(acc, key) => {
				if (!value.hasOwnProperty(key)) {
					return acc
				}
				let denormalized = denormalizeDocumentsSchema(
					typeSchema.properties[key],
					value[key],
					acc.documents,
					maxDepth - 1
				)
				acc.value[key] = denormalized.value
				acc.documents = denormalized.documents
				return acc
			},
			{ value: {}, documents }
		)
	}
	if (typeSchema.type === 'array' && Array.isArray(value)) {
		return value.reduce(
			(acc, itm) => {
				let normalized = denormalizeDocumentsSchema(
					typeSchema.items,
					itm,
					acc.documents,
					maxDepth - 1
				)
				acc.value.push(normalized.value)
				acc.documents = normalized.documents
				return acc
			},
			{ value: [], documents }
		)
	}
	return { value, documents }
}

// LIB
function jwtAuthMiddleware(req, res, next) {
	let auth = req.headers.authorization
	
	if (!auth) {
		return res.status(400).json({status: 400, code: 'no_auth_token', message: 'Invalid request. No authentication token' })
	}
	if (!auth.startsWith('Bearer ')) {
		return res.status(400).json({
			status: 400,
			code: 'invalid_auth_token',
			message: 'Invalid request. Invalid authorization header format'
		})
	}
	auth = auth.replace(/^Bearer /, '')
	try {
		let decoded = jwt.verify(auth, JWT_SECRET)
		req.decodedAuth = decoded
		if (!checkValid(req.decodedAuth.sub)) {
		 	return res.status(400).json({
		 		status: 400,
		 		code: 'invalid_auth_token',
		 		message: 'Invalid token. Subject should contain a valid public key'
		 	})
		 }
		next()
	} catch (error) {
		return res.status(400).json({ status: 401, code: 'invalid_auth_token', message: 'Invalid token' })
	}
}

// LIB
function serviceAuthMiddleware(req, res, next) {
	if (req.decodedAuth.challenge) {
		return {
			status: 400,
			code: 'invalid_token',
			message: 'Challenge token is only valid for challenge endpoints'
		}
	}
	next()
}

// LIB
async function handleChallengeResponse(challenge, signature, publicKey) {
	if (!challenge) { 
		return { status: 401, code: 'invalid_auth_token', message: 'Invalid token' }
	}	
	if (!signature) {
		return { status: 400, code: 'no_signature', message: 'No signature provided' }
	}
// VERIFY SIGNATURE 
	try {
		let cpk = await verifySignature(challenge, signature, publicKey)
		if (!cpk || !checkValid(cpk)) {
		 	return { status: 401, code: 'no_public_key', message: "Couldn't derive public key from signature" }
		 }
		if (cpk !== publicKey) {
			return { status: 403, code: 'no_signature_match', message: 'Signature does not match provided address' }
		}
	} catch (err) {
		return { status: 401, code: 'invalid_signature', message: 'Invalid signature provided' }
	}
	let token = jwt.sign({}, JWT_SECRET, { expiresIn: '1h', subject: publicKey })
	return { status: 200, jwt: token }
}

module.exports = {
	newJWT,
	handleChallengeResponse,
	serviceAuthMiddleware,
	jwtAuthMiddleware,
	createSignature,
	verifySignature,
	denormalizeDocumentsSchema
}
