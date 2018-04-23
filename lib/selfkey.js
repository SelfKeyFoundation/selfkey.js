/**
 * Module dependencies
 */
const 
	ethUtil = require('ethereumjs-util')
	nonceGenerator = require('nonce-generator')
	Web3 = require('web3')
	web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/')) 
	identityABI = 'id-abi.json'
	keyTypes = {
		1: "ERC725ManagementKey",
		2: "ERC725ActionKey",
		3: "ERC725ClaimSignerKey",
		4: "ERC725EncryptionKey"
	}

// retrieve the contract object from the network
async function connector(address) {
	return web3.eth.contract(identityABI).at(address)
}

// build the DID Document
async function buildDocument(did, address) {
	const 
		contract = await connector(address)
		owner = await contract.owner.call()
		keys = []
		keysCount = await contract.keysCount.call()
		services = []
		servicesCount = await contract.servicesCount.call()
		doc = {
			'@context': 'https://w3id.org/did/v1',
			id: did,
		}
	
	let gotKey, hash, key
	
	for (let i = keysCount.length - 1; i >= 0; i--) {
		hash = await contract.keyHashes.call(i)
		gotKey = await contract.getKeyByHash(hash)
		key = {
			id: `${did}#keys-` + (i + 1),
			type: ['KoblitzVerificationKey2017', keyTypes[gotKey[1]]],
			owner: did,
			publicAddress: gotKey[0]
		}
		keys.push(key)
	}

	if (keys.length > 0) {
		doc.publicKey = keys
	} else if (owner == '0x') {
		doc.publicKey = [
			{
				id: `${did}#keys-1`,
				type: ['KoblitzVerificationKey2017'],
				owner: did,
				publicAddress: address
			}
		]
	}

	let serviceType, endpoint, service
	
	for (let i = servicesCount.length - 1; i >= 0; i--) {
		serviceType = await contract.services.call(i)
		endpoint = await contract.getServiceByType(serviceType)
		service = {
			type: web3.toAscii(serviceType).replace(/\0/g, ''),
			serviceEndpoint: endpoint
		}
		services.push(service)
	}

	if (services.length > 0) doc.service = services
	
	return doc
}

// resolve the DID
async function didResolver(did) {
	if (!did.match(/^did:key:0x[0-9a-fA-F]{40}$/)) return { status: 400, message: 'Not a valid SelfKey DID' }
	const address = did.match(/0x[0-9a-fA-F]{40}/)[0]
	return buildDocument(did, address)
}

// verifies the signature using the generated challenge
// checks that the user requested and signature resolved public key match correctly
function verifySignature(challenge, signature, pubKey) {
	const 
		msgHash = ethUtil
			.hashPersonalMessage(Buffer.from(challenge, 'hex'))
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
function verifySignaturePromise(challenge, signature, pubKey) {
	return new Promise((resolve, reject) => {
		const 
			msgHash = ethUtil
				.hashPersonalMessage(Buffer.from(challenge, 'hex'))
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

// hash the challenge and create the signature
function signChallenge(challenge, privKey) {
	const 
		msgHash = ethUtil
			.hashPersonalMessage(Buffer.from(challenge, 'hex')) 
		signature = ethUtil
			.ecsign(msgHash, Buffer.from(privKey, 'hex'))
	return signature
}

// promised version of above
function signChallengePromise(challenge, privKey) {
	return new Promise(resolve => {
		const 
			msgHash = ethUtil
				.hashPersonalMessage(Buffer.from(challenge, 'hex'))
			signature = ethUtil
				.ecsign(msgHash, Buffer.from(privKey, 'hex'))
		resolve(signature)
	})
}

function newChallenge(length) {
	return nonceGenerator(length)
}

/**
 * Expose functions directly from package
 */
exports = module.exports = {
	didResolver,
	verifySignature,
	verifySignaturePromise,
	signChallenge,
	signChallengePromise,
	newChallenge
}
