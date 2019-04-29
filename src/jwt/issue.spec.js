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
				'RtYgHw8-QasjEK5vzaaX_vqPmFSJuBVl6_i3bsaLOaT16VsZyBj22NlIBYLpYb8bX9s_TdkUCupAG7mH1SFogg'
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
				'GZe8BrhADMcunLB6LJyL__Vv4BRs6JRUfNBpctpCORD8kHVTLdEumtB5IcfhtJ82X7K5IKh347NkrWA37DpqLtn5Cm_v2NlB9aC2WoyE7EpfTay2rckWAF9K4gClg_hdk5UZaYTTPXEpExTxC4mT4ZVB4SaaEYVW3YS5nKDM9Xx2AZGMJQUcLusBipir1WaSZjmLTgZ9o2I9HOPHCZxMelb-r5PXeq4jIkJWC9XuIhS8ycWk4W-5a0dKqNSPFkbbn2iYdTzTIpDBPs05u9NInfi8S0Gf7PWK71Hv-pTwRlGyccmmOlEGpkgZP3grzMd43nIwkq9ht9hPjGUsjghJuMTbti0hxfOuj8I-_NB6Qh2hgL46rzD2nRjFBYIymkG9oIdho8sX8agW0ntRZh514AfZNaOlgKgJ1tcxikkft0o8Fctk9R0OlrWQE9H4D9VbkzpdERboL4Ncp9N4RNf0b8MeHSQ0P97k8Iq6NVGWUvTHZ9xZZ1ZoVS4R4F3MIFQPlBu_6UH9YoitHEi205rhEf0GmePAE6dM4fxKay4X7MifiQcX0yzLAHqZJhx9FeLaeeKmBFTNosYEDuOK_KkXCowUODMFX4usam5bZv_jKJjuYwKsPJAj7C28hwQKIC7-yxMhzThhJNa-avs9y_3zCA24Xu5otn2F3yM1n57QnT0'
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
				'AdkHdr7Xmap0iUl9ri2MB48eD0QWXf3UJcx4K2e_Us-6qYfuJjb7IcVP0oVcwWm6IS_LIfR2uXNSRleSd7wBlw'
		});
	});
});
