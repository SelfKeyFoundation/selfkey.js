import { generateRSAKeyPair } from './rsa';
describe('generateRSA', () => {
	it('should generate rsa key pair', async () => {
		const keyPair = await generateRSAKeyPair();
		expect(keyPair.publicKey).toBeDefined();
		expect(keyPair.privateKey).toBeDefined();
	});
});
