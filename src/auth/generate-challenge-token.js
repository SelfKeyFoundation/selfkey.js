import { generateHMACKey } from '../key';
import { issueJWT } from '../jwt';
import { TOKEN_TYPE_CHALLENGE } from './const';

export const generateNonce = async length => {
	const hmac = await generateHMACKey(length);
	return hmac.toString('base64');
};

export const generateChallengeToken = async (did, keyId, algorithm, secret, expiresIn = '30m') => {
	const nonce = await generateNonce();
	return issueJWT(did, algorithm, secret, expiresIn, {
		keyId,
		nonce,
		tokenType: TOKEN_TYPE_CHALLENGE
	});
};
