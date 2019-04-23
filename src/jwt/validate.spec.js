import lolex from 'lolex';
import jwt from 'jsonwebtoken';
import { validateJWT } from './validate';
import {
	JWT_HMAC_SECRET,
	JWT_RSA_PRIVATE_KEY,
	JWT_RSA_PUBLIC_KEY,
	JWT_RSA_PUBLIC_KEY_WRONG
} from './__fixtures__/keys';
describe('validateJWT', () => {
	let clock;
	beforeEach(() => {
		clock = lolex.install({ now: 1556030699872, toFake: ['Date'] });
	});
	afterEach(() => {
		clock.uninstall();
	});
	it('should validate HMAC signed token', async () => {
		const token = jwt.sign({ test: 'test' }, JWT_HMAC_SECRET, { algorithm: 'HS512' });
		expect(await validateJWT(token, 'HMAC', JWT_HMAC_SECRET)).toEqual(
			jwt.decode(token, { complete: true, json: true })
		);
	});
	it('should validate RSA signed token with public key', async () => {
		const token = jwt.sign({ test: 'test' }, JWT_RSA_PRIVATE_KEY, { algorithm: 'RS512' });
		expect(await validateJWT(token, 'RSA', JWT_RSA_PUBLIC_KEY)).toEqual(
			jwt.decode(token, { complete: true, json: true })
		);
	});
	it('should throw error if declared algorithm does not match token algorithm', async () => {
		const token = jwt.sign({ test: 'test' }, JWT_RSA_PRIVATE_KEY, { algorithm: 'RS512' });
		let validationError;
		try {
			await validateJWT(token, 'HMAC', JWT_RSA_PUBLIC_KEY);
		} catch (error) {
			validationError = error;
		}
		expect(validationError).toBeDefined();
		expect(validationError.message).toEqual('invalid algorithm');
	});
	it('should throw error if HMAC secret is invalid', async () => {
		const token = jwt.sign({ test: 'test' }, JWT_HMAC_SECRET, { algorithm: 'HS512' });

		let validationError;
		try {
			await validateJWT(token, 'HMAC', 'wrong secret');
		} catch (error) {
			validationError = error;
		}
		expect(validationError).toBeDefined();
	});
	it('should throw error if RSA key is invalid', async () => {
		const token = jwt.sign({ test: 'test' }, JWT_RSA_PRIVATE_KEY, { algorithm: 'RS512' });

		let validationError;
		try {
			await validateJWT(token, 'RSA', JWT_RSA_PUBLIC_KEY_WRONG);
		} catch (error) {
			validationError = error;
		}
		expect(validationError).toBeDefined();
	});
});
