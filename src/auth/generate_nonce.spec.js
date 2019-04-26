import { generateNonce } from './generate_nonce';

describe('Generate nonce', () => {
	it('correct length', async () => {
		expect((await generateNonce()).length).toBe(88);
	});

	it('generates different values', async () => {
		const nonce1 = await generateNonce();
		const nonce2 = await generateNonce();
		expect(nonce1 !== nonce2).toBe(true);
	});
});
