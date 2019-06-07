import { parse } from './parse';

describe('Parse DID', () => {
	it('invalid string', () => {
		expect(() => parse('invalid')).toThrow('Not a DID');
	});

	it('missing method', async () => {
		expect(() => parse('did:123456789abcdefghi')).toThrow('Not a DID');
	});

	it('missing idString', async () => {
		expect(() => parse('did:example:')).toThrow('Not a DID');
	});

	it('valid did', async () => {
		expect(parse('did:example:123456789abcdefghi')).toEqual({
			method: 'example',
			idString: '123456789abcdefghi',
			params: {}
		});
	});

	it('valid did with a param', async () => {
		expect(parse('did:example:123456789abcdefghi;example:chain=ropsten')).toEqual({
			method: 'example',
			idString: '123456789abcdefghi',
			params: {
				'example:chain': 'ropsten'
			}
		});
	});

	it('valid did with more than one param', async () => {
		expect(
			parse('did:example:123456789abcdefghi;example:chain=ropsten;example:network=infura')
		).toEqual({
			method: 'example',
			idString: '123456789abcdefghi',
			params: {
				'example:chain': 'ropsten',
				'example:network': 'infura'
			}
		});
	});
});
