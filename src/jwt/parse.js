import jwt from 'jsonwebtoken';

export const parseJWT = token => {
	return jwt.decode(token, { complete: true, json: true });
};

export default parseJWT;
