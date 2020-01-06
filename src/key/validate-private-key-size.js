import { getSecretLength } from './hmac';
import { getPEMBits } from './rsa';
/**
 * @module key/validate-private-key
 */
/**
 * Checks if secret length is good enough
 * @function checkSecretLength
 *
 * @param {string} key
 * @param {string} algorithm
 * @returns {boolean} - isKeyLongEnough
 * @example
 *
 * ```js
 * sk.key.checkSecretLength();
 * ```
 */
export const checkSecretLength = (key, algorithm) => {
	switch (algorithm) {
		case 'HS512':
			return getSecretLength(key) >= 64;
		case 'RS512':
			return getPEMBits(key) >= 4096;
	}
	return false;
};
