import { getSecretLength } from './hmac';
import { getPEMBits } from './rsa';

export const isValidPrivateKeySize = (key, algorithm) => {
	switch (algorithm) {
		case 'HS512':
			return getSecretLength(key) >= 64;
		case 'RS512':
			return getPEMBits(key) >= 4096;
	}
	return false;
};
