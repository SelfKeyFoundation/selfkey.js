import { issueJWT } from '../jwt';
import { generateNonce } from './generate-nonce';
import { TOKEN_TYPE_CHALLENGE } from './const';

/**
 * @module auth/generate-challenge-token
 */

/**
 * Generate challenge token
 *
 * @async
 * @function generateChallengeToken
 * @param {string} did
 * @param {string} algorithm
 * @param {string} secret
 * @param {string} [expiresIn='30m']
 * @returns {Promise<string>} jwtToken
 * @example
 * await sk.auth.generateChallengeToken(did, 'rsa', 'secret')
 */
export const generateChallengeToken = async (did, algorithm, secret, expiresIn = '30m') => {
	const nonce = await generateNonce();
	return issueJWT(did, algorithm, secret, expiresIn, {
		nonce,
		tokenType: TOKEN_TYPE_CHALLENGE
	});
};
