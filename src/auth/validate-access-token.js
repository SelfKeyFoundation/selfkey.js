import * as JWT from '../jwt';
import { TOKEN_TYPE_ACCESS } from './const';

export const validateAccessToken = async (token, algorithm, key) => {
	const decoded = await JWT.validateJWT(token, algorithm, key);

	if (!decoded || !decoded.payload) throw new Error('Invalid token');
	if (!decoded.payload.sub) throw new Error('Invalid token, did expected in subject');
	if (decoded.payload.tokenType !== TOKEN_TYPE_ACCESS)
		throw new Error('Invalid token type, access token expected');

	return decoded;
};
