import { promisify } from 'util';
import jwt from 'jsonwebtoken';
import { JWT_ALGORITHMS } from './const';
import { checkSecretLength } from '../key';
const signJWT = promisify(jwt.sign);
/**
 * @module jwt/issue
 */
/**
 * Issue a new JWT token
 * @function issueJWT
 *
 * @param {string} subject - sub claim
 * @param {string} requestedAlgorithm - signature algorithm
 * @param {string|Buffer} secret - secret key for signature
 * @param {string} [expiresIn=1h] - longevity of the token
 * @param {object} additionalClaims - claims to include in the token
 * @returns {Promise<string>} jwt
 * @throws if unknown algorithm provided
 * @throws if secret deemed as not secure enough
 * @example
 *
 * ```js
 * sk.jwt.issueJWT('simple-session', 'hmac', 'test');
 * ```
 */
export const issueJWT = (
	subject,
	requestedAlgorithm,
	secret,
	expiresIn = '1h',
	additionalClaims = {}
) => {
	const payload = {
		...additionalClaims
	};

	delete payload.exp;
	delete payload.iat;
	delete payload.sub;

	const algorithm = JWT_ALGORITHMS[(requestedAlgorithm || '').toUpperCase()];

	if (!algorithm) {
		throw new Error(`Unknown algorithm ${requestedAlgorithm}`);
	}

	if (!checkSecretLength(secret, algorithm)) {
		throw new Error('Insecure secret');
	}

	const options = {
		algorithm,
		subject,
		expiresIn
	};
	return signJWT(payload, secret, options);
};

export default issueJWT;
