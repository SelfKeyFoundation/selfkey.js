import { generateHMACKey } from '../key';

export const generateNonce = async length => {
	return generateHMACKey(length, 'base64');
};
