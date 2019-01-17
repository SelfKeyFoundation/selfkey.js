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

function verifyJWT(token) {
	return jwt.verify(token, JWT_SECRET)
}

// create a new challenge JWT
function challengeJWT(publicKey) {
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

function userJWT(argv) {
	return jwt.sign({}, JWT_SECRET, argv)
}


// hash the challenge and create the signature
function createSignature(challenge, privateKey) {
	const msgHash = ethUtil.hashPersonalMessage(Buffer.from(challenge, 'hex'))
	let s = ethUtil.ecsign(msgHash, Buffer.from(privateKey, 'hex'))
	return ethUtil.toRpcSig(s.v, s.r, s.s)
}

// verifies the signature using ecrecover
function verifySignature(challenge, signature, publicKey) {
	const msgHash = ethUtil.hashPersonalMessage(Buffer.from(challenge))
	const sig = ethUtil.fromRpcSig(signature)
	const signatureRecover = ethUtil.ecrecover(msgHash, sig.v, sig.r, sig.s)
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
		return res.status(400).json({ status: 400, code: 'invalid_auth_token', message: 'Invalid token' })
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
	if (!checkValid(publicKey)) {
		return { status: 400, code: 'no_public_key', message: "Invalid public key" }
	}
	if (!challenge) { 
		return { status: 401, code: 'invalid_auth_token', message: 'Invalid token' }
	}	
	if (!signature) {
		return { status: 400, code: 'no_signature', message: 'No signature provided' }
	}
	try {
		let cpk = await verifySignature(challenge, signature, publicKey)
		if (!cpk || !checkValid(cpk)) {
		 	return { status: 401, code: 'no_public_key', message: 'Could not derive valid public key from signature' }
		 }
		if (cpk !== publicKey) {
			return { status: 401, code: 'no_signature_match', message: 'Signature derived public key does not match provided public key' }
		}
	} catch (err) {
		return { status: 400, code: 'invalid_signature', message: 'Invalid signature provided' }
	}
	let token = jwt.sign({}, JWT_SECRET, { expiresIn: '1h', subject: publicKey }) // Wallet JWT
	return { status: 200, jwt: token }
}

module.exports = {
	verifyJWT,
	challengeJWT,
	userJWT,
	handleChallengeResponse,
	serviceAuthMiddleware,
	jwtAuthMiddleware,
	createSignature,
	verifySignature,
	denormalizeDocumentsSchema
}
