import applicationAttributes from './__fixtures__/application-attributes';
import parsedApplicationAttributes from './__fixtures__/parsed-application-attributes';
import { parseApplicationAttributes } from './utils';
describe('kycc util', () => {
	describe('parseApplicationAttributes', () => {
		it('should parse attributes', () => {
			expect(parseApplicationAttributes(applicationAttributes)).toEqual(
				parsedApplicationAttributes
			);
		});
	});
});
