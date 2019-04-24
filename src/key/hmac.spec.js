import { generateHMACKey } from './hmac';

describe('Generate HMAC key', () => {
	it('correct length', async () => {
		expect((await generateHMACKey()).length).toBe(64);
	});

	it('generates different values', async () => {
		const hmac1 = await generateHMACKey();
		const hmac2 = await generateHMACKey();
		expect(hmac1.equals(hmac2)).toBe(false);
	});
});
