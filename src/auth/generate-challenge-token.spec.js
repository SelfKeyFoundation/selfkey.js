import { JWT_HMAC_SECRET } from '../jwt/__fixtures__/keys';
import { TOKEN_TYPE_CHALLENGE } from './const';
import { generateChallengeToken } from './generate-challenge-token';
import jwt from 'jsonwebtoken';

describe('Generate Challenge token', () => {
	it('issues a token', async () => {
		const token = await generateChallengeToken('did', 'keyId-1', 'HMAC', JWT_HMAC_SECRET);
		const decodedToken = jwt.decode(token, { complete: true });
		expect(decodedToken.payload.nonce.length).toBe(88);
		expect(decodedToken.payload.keyId).toBe('keyId-1');
		expect(decodedToken.payload.sub).toBe('did');
		expect(decodedToken.payload.tokenType).toBe(TOKEN_TYPE_CHALLENGE);
	});
});
