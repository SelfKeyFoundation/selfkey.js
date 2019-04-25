import { generateRSAKeyPair, getPEMBits } from './rsa';

describe('RSA', () => {
	describe('generateRSA', () => {
		it('should generate rsa key pair', async () => {
			const keyPair = await generateRSAKeyPair();
			expect(keyPair.publicKey).toBeDefined();
			expect(keyPair.privateKey).toBeDefined();
		});
	});

	describe('getPEMBits', () => {
		const t = bits =>
			it('' + bits, async () => {
				const pair = await generateRSAKeyPair(bits);
				expect(getPEMBits(pair.privateKey)).toBe(bits);
			});

		t(1024);
		t(2048);
		t(4096);
	});
});
