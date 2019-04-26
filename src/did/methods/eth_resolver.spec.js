import { resolver } from './eth_resolver';

const { resolve } = resolver();

describe('resolve', () => {
	it('invalid DID', async () => {
		try {
			await resolve('invalid');
		} catch (error) {
			expect(error.message).toBe('Not a DID');
		}
	});

	it('wrong method', async () => {
		try {
			await resolve('did:example:123456789abcdefghi');
		} catch (error) {
			expect(error.message).toBe('Not a valid eth DID');
		}
	});

	it('invalid idString', async () => {
		try {
			await resolve('did:eth:123456789abcdefghi');
		} catch (error) {
			expect(error.message).toBe('Not a valid eth DID');
		}
	});

	it('DID resolved', async () => {
		const did = 'did:eth:0xf3beac30c498d9e26865f34fcaa57dbb935b0d74';
		expect(await resolve(did)).toEqual({
			'@context': 'https://www.w3.org/2019/did/v1',
			id: 'did:eth:0xf3beac30c498d9e26865f34fcaa57dbb935b0d74',
			publicKey: [
				{
					id: 'did:eth:0xf3beac30c498d9e26865f34fcaa57dbb935b0d74#keys-1',
					type: 'Secp256k1VerificationKey2018',
					controller: 'did:eth:0xf3beac30c498d9e26865f34fcaa57dbb935b0d74',
					ethereumAddress: '0xf3beac30c498d9e26865f34fcaa57dbb935b0d74'
				}
			],
			authentication: ['did:eth:0xf3beac30c498d9e26865f34fcaa57dbb935b0d74#keys-1']
		});
	});
});
