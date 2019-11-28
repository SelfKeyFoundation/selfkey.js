import { parseJWT } from './parse';
describe('parseJWT', () => {
	it('should parse token', () => {
		const token =
			'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ0ZXN0IjoidGVzdC1jbGFpbSIsInR5cCI6InRlc3RfdHlwIiwiaWF0IjoxNTU2MDMwNjk5LCJleHAiOjE1NTYwMzc4OTksInN1YiI6InRlc3Rfc3ViIn0.RzaLaib-iOlV3lTCBbdwF3T5bL27ER-po0QMxYbXWJ439X5VaUAMIwAVsOtKOWEA1VSlMtdTC69LD8klGriGrQ';
		expect(parseJWT(token)).toEqual({
			header: { alg: 'HS512', typ: 'JWT' },
			payload: {
				typ: 'test_typ',
				iat: 1556030699,
				exp: 1556037899,
				sub: 'test_sub',
				test: 'test-claim'
			},
			signature:
				'RzaLaib-iOlV3lTCBbdwF3T5bL27ER-po0QMxYbXWJ439X5VaUAMIwAVsOtKOWEA1VSlMtdTC69LD8klGriGrQ'
		});
	});
});
