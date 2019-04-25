import { promisify } from 'util';
import jwt from 'jsonwebtoken';
import { JWT_ALGORITHMS } from './const';
import { isValidPrivateKeySize } from '../key';
const signJWT = promisify(jwt.sign);

export const issueJWT = (
	subject,
	requestedAlgorithm,
	secret,
	expiresIn = '1h',
	additionalClaims = {}
) => {
	const payload = {
		...additionalClaims
	};

	delete payload.exp;
	delete payload.iat;
	delete payload.sub;

	const algorithm = JWT_ALGORITHMS[(requestedAlgorithm || '').toUpperCase()];

	if (!algorithm) {
		throw new Error(`Unknown algorithm ${requestedAlgorithm}`);
	}

	if (!isValidPrivateKeySize(secret, algorithm)) {
		throw new Error('Insecure secret');
	}

	const options = {
		algorithm,
		subject,
		expiresIn
	};
	return signJWT(payload, secret, options);
};

export default issueJWT;
