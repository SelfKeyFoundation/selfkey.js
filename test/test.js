'use strict'

const selfkey = require('../lib/selfkey.js')

const pass = {
	publicKey: '2b6a21dc440cebd4bb9b91b27014ace8aa91a0b9',
	privateKey: '8a35142ef030e2f89185c738b11b5a4fc13fe3663dffea64f00059fdf0b038d4'
}

const fail = {
	publicKey: '2b6a21dc440cebd4bb9b91b27014ace8aa91a0b9',
	privateKey: '8a35142ef030e2f89185c738b11b5a4fc13fe3663dffea64f00059aaaaaaaaaa'
}
 
async function runTest(keys) {
	try {
		const nonce = await selfkey.createNonce(64)
		const signature = await selfkey.createSignature(nonce, keys.privateKey)
		const verified = await selfkey.verifySignature(nonce, signature, keys.publicKey)
		return console.info({
			verified,
			publicKey: keys.publicKey,
			privateKey: keys.privateKey,
			nonce,
			signature
		})	
	} catch (e) {
		return console.error(e)
	}
}

runTest(pass)
runTest(fail)
