import jwt from 'jsonwebtoken';
import lolex from 'lolex';
import { JWT_HMAC_SECRET, JWT_RSA_PRIVATE_KEY } from './__fixtures__/keys';

import { issueJWT } from './index';

describe('issueJWT', () => {
	let clock;
	beforeEach(() => {
		clock = lolex.install({ now: 1556030699872, toFake: ['Date'] });
	});
	afterEach(() => {
		clock.uninstall();
	});

	it('should throw if unknown algorithm is passed', async () => {
		let jwtError;
		const wrongAlgorithm = 'test';
		try {
			await issueJWT('test', wrongAlgorithm, JWT_HMAC_SECRET);
		} catch (error) {
			jwtError = error;
		}

		expect(jwtError).toEqual(new Error(`Unknown algorithm ${wrongAlgorithm}`));
	});

	it('should generate a HMAC JWT', async () => {
		const token = await issueJWT('test', 'HMAC', JWT_HMAC_SECRET);
		expect(typeof token).toBe('string');
		const decoded = jwt.decode(token, { complete: true });
		expect(decoded).toEqual({
			header: { alg: 'HS512', typ: 'JWT' },
			payload: { iat: 1556030699, exp: 1556034299, sub: 'test' },
			signature:
				'FxobjS6gSqOe0ZYB_bKCh0AqSQxLgzdZhVnsn0yZXP5FKWWDAFtfekm1l4SxF5_tPzZ5UL9u9z6u3Z1Bp2j-lw'
		});
	});

	it('should generate a RSA JWT', async () => {
		const token = await issueJWT('test', 'RSA', JWT_RSA_PRIVATE_KEY);
		expect(typeof token).toBe('string');
		const decoded = jwt.decode(token, { complete: true });
		expect(decoded).toEqual({
			header: { alg: 'RS512', typ: 'JWT' },
			payload: { iat: 1556030699, exp: 1556034299, sub: 'test' },
			signature:
				'WYJVEP9OtTmGvHIb3ToDdFIWOq0u4aowNogUzFJhbztmOKcwkP4hJRWFtP3FZKD43qO9UufqqK4mY_yZT3_gpn3KWu5Skhg25gkwUt6NtD20RfEu4wexUHX7whfoAJw3sxwFtAgE682gzMfjLph74-vhzwu47TjegDYdaBcQ_Lw8QN35EoZ8-sot4GNuY7lsjnhIY19MPF9zrVs3fhI1rBGkyb6AasemN9WClYMCG-QGeXLjXB7feJwmLuy4QgATurzhxPu-uuYrLoC0v0mPorV8LbwrUDmATdeJlFbn2SwhNq7Uodz-_Xuvgs422oYsJtzG17Xb1AYpa2UgSL9hGA'
		});
	});

	it('should setup claims', async () => {
		const sub = 'test_sub';
		const expiresIn = '2h';
		const testClaims = {
			test: 'test-claim',
			exp: 20000000000,
			iat: 10000000000,
			sub: 'another test subj'
		};
		const token = await issueJWT(sub, 'HMAC', JWT_HMAC_SECRET, expiresIn, testClaims);
		const decoded = jwt.decode(token, { complete: true, json: true });
		expect(decoded).toEqual({
			header: { alg: 'HS512', typ: 'JWT' },
			payload: { iat: 1556030699, exp: 1556037899, sub, test: 'test-claim' },
			signature:
				'230ZseanNNBIfrkA5qvFWaiazvCVKAPeHFb8gbVSy6FYXzqeBo7mucSyqNrq2E4SCcqjeg8PFJ7FYmb_956oeA'
		});
	});
});
