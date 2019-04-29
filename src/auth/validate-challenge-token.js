import * as JWT from '../jwt';
import { TOKEN_TYPE_CHALLENGE } from './const';

export const validateChallengeToken = async (token, algorithm, key) => {
	const decoded = await JWT.validateJWT(token, algorithm, key);

	if (!decoded || !decoded.payload) throw new Error('Invalid token');
	if (!decoded.payload.sub) throw new Error('Invalid token, did expected in subject');
	if (decoded.payload.tokenType !== TOKEN_TYPE_CHALLENGE)
		throw new Error('Invalid token type, challenge token expected');

	return decoded;
};
