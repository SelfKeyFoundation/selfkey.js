import { isSupported, resolve, registerMethodResolver } from './resolver';

describe('DID support', () => {
	it('invalid DID', () => {
		expect(() => isSupported('invalid')).toThrow('Not a DID');
	});

	it('DID not supported', () => {
		expect(isSupported('did:example:123456789abcdefghi')).toBeFalsy();
	});

	it('eth DID supported', () => {
		expect(isSupported('did:eth:123456789abcdefghi')).toBeTruthy();
	});

	it('selfkey DID supported', () => {
		expect(isSupported('did:selfkey:123456789abcdefghi')).toBeTruthy();
	});
});

describe('Resolver', () => {
	beforeAll(() => {
		registerMethodResolver('mock', {
			resolve: async () =>
				Promise.resolve({
					didDocument: {
						'@context': 'https://www.w3.org/2019/did/v1',
						id: 'did:mock:123456789abcdefghi'
					}
				})
		});
	});

	it('invalid DID', async () => {
		try {
			await resolve('invalid');
		} catch (error) {
			expect(error.message).toBe('Not a DID');
		}
	});

	it('DID not supported', async () => {
		try {
			await resolve('did:example:123456789abcdefghi');
		} catch (error) {
			expect(error.message).toBe('Unsupported DID method');
		}
	});

	it('DID resolved', async () => {
		expect(await resolve('did:mock:123456789abcdefghi')).toEqual({
			didDocument: {
				'@context': 'https://www.w3.org/2019/did/v1',
				id: 'did:mock:123456789abcdefghi'
			}
		});
	});
});
