import { promisify } from 'util';
import jwt from 'jsonwebtoken';

const signJWT = promisify(jwt.sign);

export const parseJWT = () => {};

export const validateJWT = () => {};

export const issueJWT = (
	subject,
	algorithm,
	secret,
	typ = 'JWT',
	expiresIn = '1h',
	additionalClaims = {}
) => {
	const payload = {
		typ,
		...additionalClaims
	};
	if (algorithm === 'RSA') {
		algorithm = 'RS512';
	} else {
		algorithm = 'HS512';
	}
	const options = {
		algorithm,
		subject,
		expiresIn
	};
	return signJWT(payload, secret, options);
};
