import crypto from 'crypto';
import util from 'util';

const randomBytes = util.promisify(crypto.randomBytes);

/**
 * Generate a HMAC Key
 * @async
 * @function generateHMACKey
 * @memberof key
 * @param {number} [length=64] - key length in bytes
 * @param {string} [encoding=base64] - the output encoding of the key
 * @returns {Promise<string|Buffer>} key
 * @example
 *
 * ```js
 * sk.key.generateHMACKey();
 * ```
 */

export const generateHMACKey = async (length = 64, encoding = 'base64') => {
	const bytes = await randomBytes(length);
	if (!encoding) {
		return bytes;
	}
	return bytes.toString(encoding);
};

/**
 * Calculate the bytes length of secret key
 * @async
 * @function generateHMACKey
 * @memberof key
 * @param {string} secret
 * @param {string} [encoding=base64] - the input encoding of the secret
 * @returns number
 * @example
 *
 * ```js
 * sk.key.getSecretLength(secret);
 * ```
 */

export const getSecretLength = (secret, encoding = 'base64') => {
	if (!Buffer.isBuffer(secret)) {
		secret = Buffer.from(secret, encoding);
	}
	return secret.length;
};
