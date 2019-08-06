import { getControllerAddress } from './selfkey-simple-resolver';
import { resolver } from './selfkey-resolver';

jest.mock('./selfkey-simple-resolver');
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

	it('DID does not exist', async () => {
		getControllerAddress.mockResolvedValueOnce(null);
		const did =
			'did:selfkey:0x11c47898a9d3498986129cdb0b8ac3ed468f5e400cb0076d40f355ad1ad2a120';
		expect(await resolve(did)).toBeNull();
	});

	it('DID resolved with no param', async () => {
		const did =
			'did:selfkey:0x11c47898a9d3498986129cdb0b8ac3ed468f5e400cb0076d40f355ad1ad2a120';
		expect(await resolve(did)).toEqual({
			'@context': 'https://www.w3.org/2019/did/v1',
			id: 'did:selfkey:0x11c47898a9d3498986129cdb0b8ac3ed468f5e400cb0076d40f355ad1ad2a120',
			publicKey: [
				{
					id:
						'did:selfkey:0x11c47898a9d3498986129cdb0b8ac3ed468f5e400cb0076d40f355ad1ad2a120#keys-1',
					type: 'EcdsaSecp256k1VerificationKey2019',
					controller:
						'did:selfkey:0x11c47898a9d3498986129cdb0b8ac3ed468f5e400cb0076d40f355ad1ad2a120',
					ethereumAddress: '0xf3beac30c498d9e26865f34fcaa57dbb935b0d74'
				}
			],
			authentication: [
				'did:selfkey:0x11c47898a9d3498986129cdb0b8ac3ed468f5e400cb0076d40f355ad1ad2a120#keys-1'
			]
		});
		expect(getControllerAddress).toHaveBeenCalledWith(
			'0x11c47898a9d3498986129cdb0b8ac3ed468f5e400cb0076d40f355ad1ad2a120',
			'mainnet'
		);
	});

	it('DID resolved with correct chain param', async () => {
		const did =
			'did:selfkey:0x11c47898a9d3498986129cdb0b8ac3ed468f5e400cb0076d40f355ad1ad2a120;selfkey:chain=ropsten';
		expect(await resolve(did)).toEqual({
			'@context': 'https://www.w3.org/2019/did/v1',
			id:
				'did:selfkey:0x11c47898a9d3498986129cdb0b8ac3ed468f5e400cb0076d40f355ad1ad2a120;selfkey:chain=ropsten',
			publicKey: [
				{
					id:
						'did:selfkey:0x11c47898a9d3498986129cdb0b8ac3ed468f5e400cb0076d40f355ad1ad2a120;selfkey:chain=ropsten#keys-1',
					type: 'EcdsaSecp256k1VerificationKey2019',
					controller:
						'did:selfkey:0x11c47898a9d3498986129cdb0b8ac3ed468f5e400cb0076d40f355ad1ad2a120;selfkey:chain=ropsten',
					ethereumAddress: '0xf3beac30c498d9e26865f34fcaa57dbb935b0d74'
				}
			],
			authentication: [
				'did:selfkey:0x11c47898a9d3498986129cdb0b8ac3ed468f5e400cb0076d40f355ad1ad2a120;selfkey:chain=ropsten#keys-1'
			]
		});
		expect(getControllerAddress).toHaveBeenCalledWith(
			'0x11c47898a9d3498986129cdb0b8ac3ed468f5e400cb0076d40f355ad1ad2a120',
			'ropsten'
		);
	});

	it('DID resolved with incorrect chain param', async () => {
		const did =
			'did:selfkey:0x11c47898a9d3498986129cdb0b8ac3ed468f5e400cb0076d40f355ad1ad2a120;selfkey:network=ropsten';
		expect(await resolve(did)).toEqual({
			'@context': 'https://www.w3.org/2019/did/v1',
			id:
				'did:selfkey:0x11c47898a9d3498986129cdb0b8ac3ed468f5e400cb0076d40f355ad1ad2a120;selfkey:network=ropsten',
			publicKey: [
				{
					id:
						'did:selfkey:0x11c47898a9d3498986129cdb0b8ac3ed468f5e400cb0076d40f355ad1ad2a120;selfkey:network=ropsten#keys-1',
					type: 'EcdsaSecp256k1VerificationKey2019',
					controller:
						'did:selfkey:0x11c47898a9d3498986129cdb0b8ac3ed468f5e400cb0076d40f355ad1ad2a120;selfkey:network=ropsten',
					ethereumAddress: '0xf3beac30c498d9e26865f34fcaa57dbb935b0d74'
				}
			],
			authentication: [
				'did:selfkey:0x11c47898a9d3498986129cdb0b8ac3ed468f5e400cb0076d40f355ad1ad2a120;selfkey:network=ropsten#keys-1'
			]
		});
		expect(getControllerAddress).toHaveBeenCalledWith(
			'0x11c47898a9d3498986129cdb0b8ac3ed468f5e400cb0076d40f355ad1ad2a120',
			'mainnet'
		);
	});
});
