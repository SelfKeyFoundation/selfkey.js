import { JWT_HMAC_SECRET } from '../jwt/__fixtures__/keys';
import { TOKEN_TYPE_ACCESS } from './const';

describe('Generate Challenge token', () => {
	afterEach(() => {
		jest.clearAllMocks();
	});
	it('issues a token', async () => {
		const testToken =
			'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ0ZXN0IjoidGVzdC1jbGFpbSIsInR5cCI6InRlc3RfdHlwIiwiaWF0IjoxNTU2MDMwNjk5LCJleHAiOjE1NTYwMzc4OTksInN1YiI6InRlc3Rfc3ViIn0.RzaLaib-iOlV3lTCBbdwF3T5bL27ER-po0QMxYbXWJ439X5VaUAMIwAVsOtKOWEA1VSlMtdTC69LD8klGriGrQ';

		const mockJWT = () => {
			const original = jest.requireActual('../jwt');
			return {
				...original,
				issueJWT: jest.fn(length => testToken)
			};
		};
		jest.mock('../jwt', () => mockJWT());

		const { issueJWT } = require('../jwt');
		const { generateAccessToken } = require('./generate-access-token');

		const token = await generateAccessToken('did', 'HMAC', JWT_HMAC_SECRET);
		expect(token).toBe(testToken);
		expect(issueJWT).toHaveBeenCalledWith('did', 'HMAC', JWT_HMAC_SECRET, '1h', {
			tokenType: TOKEN_TYPE_ACCESS
		});
	});
});
