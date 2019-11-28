import * as JWT from '../jwt';
import * as DID from '../did';
import { TOKEN_TYPE_ACCESS } from './const';

jest.mock('../jwt', () => ({
	validateJWT: jest.fn()
}));

jest.mock('../did', () => ({
	parse: jest.fn()
}));

describe('validateAccessToken', () => {
	afterEach(() => {
		jest.clearAllMocks();
	});
	it('should throw if jwt validation throws', async () => {
		let validationError;

		JWT.validateJWT.mockImplementation(() => {
			throw new Error('validation error');
		});

		DID.parse.mockImplementation(() => true);

		const { validateAccessToken } = require('./validate-access-token');
		try {
			await validateAccessToken('test', 'HMAC', 'secret');
		} catch (error) {
			validationError = error;
		}

		expect(validationError.message).toBe('validation error');
	});
	it('should throw if tokenType is not challenge', async () => {
		let validationError;

		JWT.validateJWT.mockImplementation(() => {
			return { payload: { sub: 'test' } };
		});
		const { validateAccessToken } = require('./validate-access-token');

		try {
			await validateAccessToken('test', 'HMAC', 'secret');
		} catch (error) {
			validationError = error;
		}

		expect(validationError.message).toBe('Invalid token type, access token expected');
	});
	it('should return decoded token if jwt is valid and tokenType is access', async () => {
		JWT.validateJWT.mockImplementation(() => {
			return { payload: { sub: 'test', tokenType: TOKEN_TYPE_ACCESS } };
		});
		const { validateAccessToken } = require('./validate-access-token');

		expect(await validateAccessToken('test', 'HMAC', 'secret')).toEqual({
			payload: { sub: 'test', tokenType: TOKEN_TYPE_ACCESS }
		});
	});
	xit('should throw if subject is not did', () => {});
});
