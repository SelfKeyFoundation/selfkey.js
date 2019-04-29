import { getControllerAddress } from './selfkey_simple_resolver';
import { resolver } from './selfkey_resolver';

jest.mock('./selfkey_simple_resolver');
getControllerAddress.mockResolvedValue('0xf3beac30c498d9e26865f34fcaa57dbb935b0d74');

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
			expect(error.message).toBe('Not a valid selfkey DID');
		}
	});

	it('invalid idString', async () => {
		try {
			await resolve('did:selfkey:123456789abcdefghi');
		} catch (error) {
			expect(error.message).toBe('Not a valid selfkey DID');
		}
	});

	it('DID resolved', async () => {
		const did =
			'did:selfkey:0x11c47898a9d3498986129cdb0b8ac3ed468f5e400cb0076d40f355ad1ad2a120';
		expect(await resolve(did)).toEqual({
			'@context': 'https://www.w3.org/2019/did/v1',
			id: 'did:selfkey:0x11c47898a9d3498986129cdb0b8ac3ed468f5e400cb0076d40f355ad1ad2a120',
			publicKey: [
				{
					id:
						'did:selfkey:0x11c47898a9d3498986129cdb0b8ac3ed468f5e400cb0076d40f355ad1ad2a120#keys-1',
					type: 'Secp256k1VerificationKey2018',
					controller:
						'did:selfkey:0x11c47898a9d3498986129cdb0b8ac3ed468f5e400cb0076d40f355ad1ad2a120',
					ethereumAddress: '0xf3beac30c498d9e26865f34fcaa57dbb935b0d74'
				}
			],
			authentication: [
				'did:selfkey:0x11c47898a9d3498986129cdb0b8ac3ed468f5e400cb0076d40f355ad1ad2a120#keys-1'
			]
		});
	});
});
