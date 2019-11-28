import * as JWT from '../jwt';
import * as DID from '../did';
import { TOKEN_TYPE_ACCESS } from './const';

export const validateAccessToken = async (token, algorithm, key) => {
	const decoded = await JWT.validateJWT(token, algorithm, key);

	if (!decoded || !decoded.payload) throw new Error('Invalid token');
	if (!decoded.payload.sub) throw new Error('Invalid token, subject must be DID');
	try {
		DID.parse(decoded.payload.sub);
	} catch (error) {
		throw new Error('Invalid token, subject must be DID');
	}
	if (decoded.payload.tokenType !== TOKEN_TYPE_ACCESS)
		throw new Error('Invalid token type, access token expected');

	return decoded;
};
