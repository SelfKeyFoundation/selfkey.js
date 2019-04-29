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
			idString: '123456789abcdefghi'
		});
	});
});
