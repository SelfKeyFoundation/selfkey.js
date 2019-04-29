import * as JWT from '../jwt';
import { TOKEN_TYPE_CHALLENGE } from './const';

jest.mock('../jwt', () => ({
	validateJWT: jest.fn()
}));

describe('validateChallangeToken', () => {
	afterEach(() => {
		jest.clearAllMocks();
	});
	it('should throw if jwt validation throws', async () => {
		let validationError;

		JWT.validateJWT.mockImplementation(() => {
			throw new Error('validation error');
		});

		const { validateChallengeToken } = require('./validate-challenge-token');
		try {
			await validateChallengeToken('test', 'HMAC', 'secret');
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
		const { validateChallengeToken } = require('./validate-challenge-token');

		try {
			await validateChallengeToken('test', 'HMAC', 'secret');
		} catch (error) {
			validationError = error;
		}

		expect(validationError.message).toBe('Invalid token type, challenge token expected');
	});
	it('should return decoded token if jwt is valid and tokenType is challenge', async () => {
		JWT.validateJWT.mockImplementation(() => {
			return { payload: { sub: 'test', tokenType: TOKEN_TYPE_CHALLENGE } };
		});
		const { validateChallengeToken } = require('./validate-challenge-token');

		expect(await validateChallengeToken('test', 'HMAC', 'secret')).toEqual({
			payload: { sub: 'test', tokenType: TOKEN_TYPE_CHALLENGE }
		});
	});
	xit('should throw if subject is not did', () => {});
});
