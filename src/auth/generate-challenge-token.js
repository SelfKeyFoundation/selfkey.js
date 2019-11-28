import { issueJWT } from '../jwt';
import { generateNonce } from './generate-nonce';
import { TOKEN_TYPE_CHALLENGE } from './const';

export const generateChallengeToken = async (did, algorithm, secret, expiresIn = '30m') => {
	const nonce = await generateNonce();
	return issueJWT(did, algorithm, secret, expiresIn, {
		nonce,
		tokenType: TOKEN_TYPE_CHALLENGE
	});
};
