import * as JWT from '../jwt';
import * as DID from '../did';
import { TOKEN_TYPE_ACCESS } from './const';

/**
 * @module auth/validate-access-token
 */

/**
 * Validates access token
 *
 * @async
 * @function validateAccessToken
 *
 * @param {string} token
 * @param {string} algorithm
 * @param {string|Buffer} key
 * @returns {Promise<object>} decodedToken
 * @throws If token is invalid
 * @throws if subject is not did
 * @throws if token type is not access
 * @example
 * await sk.auth.validateAccessToken(token, 'hmac', 'secret');
 */

export const validateAccessToken = async (token, algorithm, key) => {
	const decoded = await JWT.validateJWT(token, algorithm, key);

	if (!decoded || !decoded.payload) throw new Error('Invalid token');
	if (!decoded.payload.sub) throw new Error('Invalid token, subject must be DID');
	try {
		DID.parse(decoded.payload.sub);
	} catch (error) {
		throw new Error('Invalid token, subject must be DID');
	}
	if (decoded.payload.tokenType !== TOKEN_TYPE_ACCESS)
		throw new Error('Invalid token type, access token expected');

	return decoded;
};
