import crypto from 'crypto';
import util from 'util';

const randomBytes = util.promisify(crypto.randomBytes);

export const generateHMACKey = (length = 64) => {
	return randomBytes(length);
};
