import { issueJWT } from '../jwt';
import { TOKEN_TYPE_ACCESS } from './const';

/**
 * @module auth/generate-access-token
 */

/**
 * Generate access token
 *
 * @async
 * @function generateAccessToken
 * @param {string} did
 * @param {string} algorithm
 * @param {string} secret
 * @param {string} [expiresIn='1h']
 * @returns {Promise<string>} jwtToken
 * @example
 * await sk.auth.generateAccessToken(did, 'rsa', 'secret')
 */
export const generateAccessToken = async (did, algorithm, secret, expiresIn = '1h') => {
	return issueJWT(did, algorithm, secret, expiresIn, {
		tokenType: TOKEN_TYPE_ACCESS
	});
};
