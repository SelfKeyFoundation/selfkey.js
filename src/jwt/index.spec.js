import jwt from 'jsonwebtoken';
import lolex from 'lolex';
import { JWT_HMAC_SECRET } from './__fixtures__/keys';

import { issueJWT } from './index';

describe('JWT', () => {
	let clock;

	afterEach(() => {
		if (clock) {
			clock.uninstall();
		}
	});
	describe('issueJWT', () => {
		it('should generate a valid jwt', async () => {
			clock = lolex.install({ now: 1556030699872, toFake: ['Date'] });
			const token = await issueJWT('test', 'HMAC', JWT_HMAC_SECRET);
			expect(typeof token).toBe('string');
			const decoded = jwt.decode(token, { complete: true });
			expect(decoded).toEqual({
				header: { alg: 'HS512', typ: 'JWT' },
				payload: { typ: 'JWT', iat: 1556030699, exp: 1556034299, sub: 'test' },
				signature:
					'-1vGyim9LfmNfserg1vQHGq25bNukicO4T7wlSNtFhKwdBVy52G3eojMc4qOurcL-Jgekd72TBh-gST264_Ouw'
			});
		});
		it('should generate a HMAC JWT if no private key provided', () => {});
		it('should generate a RSA JWT if private key provided', () => {});
	});
});
