import crypto from 'crypto';
import util from 'util';

const randomBytes = util.promisify(crypto.randomBytes);

/**
 * Generates base64 encoded random string
 *
 * @async
 * @function generateNonce
 * @memberof auth
 * @param {number} [length=64]
 * @returns {Promise<string>} nonce
 * @example
 * await sk.auth.generateNonce();
 */

export const generateNonce = async (length = 64) => {
	const buffer = await randomBytes(length);
	return buffer.toString('base64');
};
