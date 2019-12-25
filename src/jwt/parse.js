import jwt from 'jsonwebtoken';

/**
 * Parse a JWT token
 * @function parseJWT
 * @memberof jwt
 * @param {string} token - jwt token
 * @returns {object} decodedJwt
 * @example
 *
 * ```js
 * sk.jwt.parseJWT(token);
 * ```
 */
export const parseJWT = token => {
	return jwt.decode(token, { complete: true, json: true });
};

export default parseJWT;
