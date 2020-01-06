import * as JWT from '../jwt';
import { TOKEN_TYPE_CHALLENGE } from './const';

/**
 * @module auth/validate-challenge-token
 */

/**
 * Validates challenge token
 *
 * @async
 * @function validateChallengeToken
 *
 * @param {string} token
 * @param {string} algorithm
 * @param {string|Buffer} key
 * @returns {Promise<object>} decodedToken
 * @throws If token is invalid
 * @throws if subject is not did
 * @throws if token type is not challenge
 * @example
 * await sk.auth.validateChallengeToken(token, 'hmac', 'secret');
 */

export const validateChallengeToken = async (token, algorithm, key) => {
	const decoded = await JWT.validateJWT(token, algorithm, key);

	if (!decoded || !decoded.payload) throw new Error('Invalid token');
	if (!decoded.payload.sub) throw new Error('Invalid token, DID expected in subject');
	if (decoded.payload.tokenType !== TOKEN_TYPE_CHALLENGE)
		throw new Error('Invalid token type, challenge token expected');

	return decoded;
};
