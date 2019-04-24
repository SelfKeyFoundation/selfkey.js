import { generateHMACKey } from '../key';

export const generateNonce = async length => {
	const hmac = await generateHMACKey(length);
	return hmac.toString('base64');
};
