import crypto from 'crypto';
import util from 'util';

const randomBytes = util.promisify(crypto.randomBytes);

export const generateNonce = async (length = 64) => {
	const buffer = await randomBytes(length);
	return buffer.toString('base64');
};
