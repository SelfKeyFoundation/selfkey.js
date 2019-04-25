import { generateHMACKey, getSecretLength } from './hmac';

describe('HMAC', () => {
	describe('Generate HMAC key', () => {
		it('correct length', async () => {
			expect((await generateHMACKey(64, null)).length).toBe(64);
		});

		it('generates buffers with different values', async () => {
			const hmac1 = await generateHMACKey(64, null);
			const hmac2 = await generateHMACKey(64, null);
			expect(hmac1.equals(hmac2)).toBe(false);
		});

		it('generates strings with different values', async () => {
			const hmac1 = await generateHMACKey();
			const hmac2 = await generateHMACKey();
			expect(hmac1).not.toBe(hmac2);
		});
	});

	describe('getSecretLength', () => {
		it('should return length of a buffer', () => {
			const buf = Buffer.from('test');
			expect(getSecretLength(buf)).toEqual(buf.length);
		});

		it('should return bytes of base64 string', () => {
			const buf = Buffer.from('test');
			const secret = buf.toString('base64');
			expect(getSecretLength(secret)).toBe(buf.length);
		});

		it('should return bytes of hex string', () => {
			const buf = Buffer.from('test');
			const secret = buf.toString('hex');
			expect(getSecretLength(secret, 'hex')).toBe(buf.length);
		});

		it('should return bytes of utf8 string', () => {
			const buf = Buffer.from('test', 'utf8');

			expect(getSecretLength('test', 'utf8')).toBe(buf.length);
		});
	});
});
