import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import { JWT_ALGORITHMS } from './const';

const verifyJWT = promisify(jwt.verify);
/**
 * @module jwt/validate
 */

/**
 * Validate a JWT token
 * @function validateJWT
 *
 * @param {string} token - jwt token
 * @param {string} requestedAlgorithm - algorithm name
 * @param {string} key - the key to validate the token against
 * @returns {Promise<object|null>} decodedJwt
 * @throws if unknown algorithm provided
 * @example
 *
 * ```js
 * sk.jwt.validateJWT(token, 'hmac', key);
 * ```
 */
export const validateJWT = (token, requestedAlgorithm, key) => {
	const algorithm = JWT_ALGORITHMS[(requestedAlgorithm || '').toUpperCase()];

	if (!algorithm) {
		throw new Error(`Unknown algorithm ${requestedAlgorithm}`);
	}
	const options = {
		algorithms: [algorithm],
		complete: true,
		json: true
	};
	return verifyJWT(token, key, options);
};

export default validateJWT;
