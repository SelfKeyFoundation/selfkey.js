import crypto from 'crypto';
import util from 'util';

const randomBytes = util.promisify(crypto.randomBytes);

export const generateHMACKey = async (length = 64, encoding = 'base64') => {
	const bytes = await randomBytes(length);
	if (!encoding) {
		return bytes;
	}
	return bytes.toString(encoding);
};

export const getSecretLength = (secret, encoding = 'base64') => {
	if (!Buffer.isBuffer(secret)) {
		secret = Buffer.from(secret, encoding);
	}
	return secret.length;
};
