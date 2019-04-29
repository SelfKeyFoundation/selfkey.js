import { issueJWT } from '../jwt';
import { TOKEN_TYPE_ACCESS } from './const';

export const generateAccessToken = async (did, algorithm, secret, expiresIn = '1h') => {
	return issueJWT(did, algorithm, secret, expiresIn, {
		tokenType: TOKEN_TYPE_ACCESS
	});
};
