import { resolve } from '../did/resolver';
import { verifyChallengeSignature, registerVerifier } from './verify_challenge_signature';

jest.mock('../did/resolver');

const nonce = 'nonce';
const signature = {
	value: 'mockValue',
	keyId: 'mockKeyId'
};
const did = 'did:mock:123456789abcdefghi';

describe('verifyChallengeSignature', () => {
	it('Invalid key usage', async () => {
		resolve.mockResolvedValueOnce({}).mockResolvedValueOnce({ authentication: [] });
		try {
			await verifyChallengeSignature(nonce, signature, did);
		} catch (error) {
			expect(error.message).toBe('Invalid key usage');
		}
		try {
			await verifyChallengeSignature(nonce, signature, did);
		} catch (error) {
			expect(error.message).toBe('Invalid key usage');
		}
	});

	it('Missing public key', async () => {
		const authentication = ['mockKeyId'];
		resolve
			.mockResolvedValueOnce({ authentication })
			.mockResolvedValueOnce({ authentication, publicKey: [] });
		try {
			await verifyChallengeSignature(nonce, signature, did);
		} catch (error) {
			expect(error.message).toBe('Missing public key: mockKeyId');
		}
		try {
			await verifyChallengeSignature(nonce, signature, did);
		} catch (error) {
			expect(error.message).toBe('Missing public key: mockKeyId');
		}
	});

	it('Unsupported Public Key type', async () => {
		const authentication = ['mockKeyId'];
		const publicKey = [
			{
				id: 'mockKeyId',
				type: 'MockType'
			}
		];
		resolve.mockResolvedValueOnce({ authentication, publicKey });
		try {
			await verifyChallengeSignature(nonce, signature, did);
		} catch (error) {
			expect(error.message).toBe('Unsupported Public Key type: MockType');
		}
	});

	it('Signature verified', async () => {
		const didDoc = {
			publicKey: [
				{
					id: 'mockKeyId',
					type: 'MockType'
				}
			],
			authentication: ['mockKeyId']
		};
		resolve.mockResolvedValueOnce(didDoc);
		const mockVerifier = {
			verify: jest.fn().mockReturnValueOnce(true)
		};
		registerVerifier('MockType', mockVerifier);
		expect(await verifyChallengeSignature(nonce, signature, did)).toBeTruthy();
		expect(mockVerifier.verify).toHaveBeenCalledWith(
			nonce,
			signature.value,
			didDoc.publicKey[0]
		);
	});
});
