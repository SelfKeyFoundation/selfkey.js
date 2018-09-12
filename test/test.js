const selfkey = require('../lib/selfkey.js')

const publicKey = '2b6a21dc440cebd4bb9b91b27014ace8aa91a0b9'
const privateKey = '8a35142ef030e2f89185c738b11b5a4fc13fe3663dffea64f00059fdf0b038d4'

async function runTest() {
	try {
		const nonce = await selfkey.createNonce(64)
		const signature = await selfkey.createSignature(nonce, privateKey)
		const verified = await selfkey.verifySignature(nonce, signature, publicKey)
		return console.log(signature, verified)	
	} catch (e) {
		return console.log(e)
	}
}

runTest()
