import { JWT_HMAC_SECRET } from '../jwt/__fixtures__/keys';
import { TOKEN_TYPE_CHALLENGE } from './const';

describe('Generate Challenge token', () => {
	afterEach(() => {
		jest.clearAllMocks();
	});
	it('issues a token', async () => {
		const testToken =
			'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ0ZXN0IjoidGVzdC1jbGFpbSIsInR5cCI6InRlc3RfdHlwIiwiaWF0IjoxNTU2MDMwNjk5LCJleHAiOjE1NTYwMzc4OTksInN1YiI6InRlc3Rfc3ViIn0.RzaLaib-iOlV3lTCBbdwF3T5bL27ER-po0QMxYbXWJ439X5VaUAMIwAVsOtKOWEA1VSlMtdTC69LD8klGriGrQ';
		const nonce = Buffer.from('test').toString('base64');
		const mockGenerateNonce = () => {
			const original = jest.requireActual('./generate-nonce');
			return { ...original, generateNonce: jest.fn(length => nonce) };
		};
		jest.mock('./generate-nonce', () => mockGenerateNonce());

		const mockJWT = () => {
			const original = jest.requireActual('../jwt');
			return {
				...original,
				issueJWT: jest.fn(length => testToken)
			};
		};
		jest.mock('../jwt', () => mockJWT());

		const { issueJWT } = require('../jwt');
		const { generateChallengeToken } = require('./generate-challenge-token');

		const token = await generateChallengeToken('did', 'HMAC', JWT_HMAC_SECRET);
		expect(token).toBe(testToken);
		expect(issueJWT).toHaveBeenCalledWith('did', 'HMAC', JWT_HMAC_SECRET, '30m', {
			nonce,
			tokenType: TOKEN_TYPE_CHALLENGE
		});
	});
});
