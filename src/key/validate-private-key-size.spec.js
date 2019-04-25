import {
	JWT_HMAC_SECRET,
	JWT_RSA_PRIVATE_KEY,
	JWT_RSA_PRIVATE_KEY_WRONG
} from '../jwt/__fixtures__/keys';
import { isValidPrivateKeySize } from './validate-private-key-size';

describe('isValidPrivateKeySize', () => {
	const t = (name, key, algorithm, isValid) =>
		it(name, () => {
			expect(isValidPrivateKeySize(key, algorithm)).toBe(isValid);
		});

	t(`${JWT_HMAC_SECRET} HS512 valid`, JWT_HMAC_SECRET, 'HS512', true);
	t(`test HS512 invalid`, 'test', 'HS512', false);
	t(`Valid pem RS512 valid`, JWT_RSA_PRIVATE_KEY, 'RS512', true);
	t(`Invalid pem RS512 invalid`, JWT_RSA_PRIVATE_KEY_WRONG, 'RS512', false);
});
