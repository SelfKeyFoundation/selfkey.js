import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import { JWT_ALGORITHMS } from './const';

const verifyJWT = promisify(jwt.verify);

export const validateJWT = (token, requestedAlgorithm, key) => {
	const algorithm = JWT_ALGORITHMS[(requestedAlgorithm || '').toUpperCase()];

	if (!algorithm) {
		throw new Error(`Unknown algorithm ${requestedAlgorithm}`);
	}
	const options = {
		algorithms: [algorithm],
		complete: true,
		json: true
	};
	return verifyJWT(token, key, options);
};

export default validateJWT;
