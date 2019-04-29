describe('generateNonce', () => {
	afterEach(() => {
		jest.clearAllMocks();
	});
	it('nonce should be bas64 encoded hmac secret', async () => {
		const hmac = Buffer.from('test');
		const nonceLength = 12;

		const mockKey = () => {
			const original = jest.requireActual('../key');
			return { ...original, generateHMACKey: jest.fn(length => hmac.toString('base64')) };
		};
		jest.mock('../key', () => mockKey());

		const { generateNonce } = require('./generate-nonce');
		const { generateHMACKey } = require('../key');

		const nonce = await generateNonce(nonceLength);
		expect(nonce).toEqual(hmac.toString('base64'));
		expect(generateHMACKey).toHaveBeenCalledWith(nonceLength, 'base64');
	});
});
