const { generateKeyPair } = require('crypto');
const pemtools = require('pemtools');

/**
 * Generate a RSA Key Pair
 * @function generateRSAKeyPair
 * @memberof key
 * @param {number} [length=4096] - key length in bytes
 * @returns {Promise<object>} keypair - contains publicKey adn privateKey
 * @example
 *
 * ```js
 * sk.key.generateRSAKeyPair();
 * ```
 */
export const generateRSAKeyPair = (length = 4096) => {
	return new Promise((resolve, reject) => {
		generateKeyPair(
			'rsa',
			{
				modulusLength: length,
				publicKeyEncoding: {
					type: 'spki',
					format: 'pem'
				},
				privateKeyEncoding: {
					type: 'pkcs1',
					format: 'pem'
				}
			},
			(err, publicKey, privateKey) => {
				if (err) {
					return reject(err);
				}
				return resolve({ privateKey, publicKey });
			}
		);
	});
};

// TODO: reconsider adding third party for private key handing
export const getPEMBits = privateKey => {
	const pem = pemtools(privateKey);
	return pem.pubkey.bits;
};
