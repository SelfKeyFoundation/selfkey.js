const
	Web3 = require('web3')
	web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/')) 
	identityABI = 'id-abi.json'
	keyTypes = {
		1: "ERC725ManagementKey",
		2: "ERC725ActionKey",
		3: "ERC725ClaimSignerKey",
		4: "ERC725EncryptionKey"
	}

// function for retrieving contract object from the network
async function connector(address) {
	return web3.eth.contract(identityABI).at(address)
}

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

	for (var i = 0; i < keysCount; i++) {
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

	let serviceType, endpoint, service

	for (var i = 0; i < servicesCount; i++) {
		serviceType = await contract.services.call(i)
		endpoint = await contract.getServiceByType(serviceType)
		service = {
			type: web3.toAscii(serviceType).replace(/\0/g, ''),
			serviceEndpoint: endpoint
		}
		services.push(service)
	}

	if (keys.length > 0) {
		doc.publicKey = keys
	} else if (owner == '0x') {
		doc.publicKey = [{
			id: `${did}#keys-1`,
			type: ['KoblitzVerificationKey2017'],
			owner: did,
			publicAddress: address
		}]
	}

	if (services.length > 0) {
		doc.service = services
	}

	return doc
}

async function resolver(did) {
	if (!did.match(/^did:key:0x[0-9a-fA-F]{40}$/)) return { error: 'Not a valid SelfKey DID' }
	const address = did.match(/0x[0-9a-fA-F]{40}/)[0]
	return buildDocument(did, address)
}

module.exports = resolver