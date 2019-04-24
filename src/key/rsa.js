const { generateKeyPair } = require('crypto');

export const generateRSAKeyPair = (length = 2048) => {
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
					type: 'pkcs8',
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
