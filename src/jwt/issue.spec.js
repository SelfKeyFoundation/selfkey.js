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
			payload: { typ: 'JWT', iat: 1556030699, exp: 1556034299, sub: 'test' },
			signature:
				'-1vGyim9LfmNfserg1vQHGq25bNukicO4T7wlSNtFhKwdBVy52G3eojMc4qOurcL-Jgekd72TBh-gST264_Ouw'
		});
	});

	it('should generate a RSA JWT', async () => {
		const token = await issueJWT('test', 'RSA', JWT_RSA_PRIVATE_KEY);
		expect(typeof token).toBe('string');
		const decoded = jwt.decode(token, { complete: true });
		expect(decoded).toEqual({
			header: { alg: 'RS512', typ: 'JWT' },
			payload: { typ: 'JWT', iat: 1556030699, exp: 1556034299, sub: 'test' },
			signature:
				'OOdeGa0q_aAF6w9A5GDjH5jSnALjbnev85_PgSZiBZNEJLOQBW78ajkySqMT6sUexKHdlIzyP4pOBYAejpgTO5zDOjvYXJ_sC_DEd0kSJK5WMQcCeSmNugfBIvm4mrAAdWJjfwh9OYsVcy8I_Zr8J7kSxaoeI_L0LjR1ZqGmCoXmTZ1c5viJGDLCougPfNA6UENY6nK9UhffhPi-heC4qtHYNOhOUiMkhrm01xuOVkkjIoN2f_1MoI1ZO_mj0NZ7E1mCKRbiD_KsqNLYfxcv8OH83PB16ha5r7bN8oO7vIsCusecXD52EcFSMs0N3Bte-901kJVMsgwncWzzLd5-lw'
		});
	});

	it('should setup typ', async () => {
		const typ = 'test_typ';
		const token = await issueJWT('test', 'HMAC', JWT_HMAC_SECRET, typ);
		const decoded = jwt.decode(token);
		expect(decoded.typ).toEqual(typ);
	});

	it('should setup claims', async () => {
		const sub = 'test_sub';
		const typ = 'test_typ';
		const expiresIn = '2h';
		const testClaims = {
			test: 'test-claim',
			typ: 'oter_test_typ',
			exp: 20000000000,
			iat: 10000000000,
			sub: 'another test subj'
		};
		const token = await issueJWT(sub, 'HMAC', JWT_HMAC_SECRET, typ, expiresIn, testClaims);
		const decoded = jwt.decode(token, { complete: true, json: true });
		expect(decoded).toEqual({
			header: { alg: 'HS512', typ: 'JWT' },
			payload: { typ, iat: 1556030699, exp: 1556037899, sub, test: 'test-claim' },
			signature:
				'RzaLaib-iOlV3lTCBbdwF3T5bL27ER-po0QMxYbXWJ439X5VaUAMIwAVsOtKOWEA1VSlMtdTC69LD8klGriGrQ'
		});
	});
});
