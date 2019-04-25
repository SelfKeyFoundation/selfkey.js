import path from 'path';
import { readTextFile } from '../../../test/utils';

export const JWT_HMAC_SECRET =
	'tTBKFmmfKLJRpiytd7F0LhJmFTaMO0idPH04poNpDIAU0Dqp602jwyKV9w/Si5xsYztUEuQEkYCOf7MjzgE9gw==';

export const JWT_RSA_PUBLIC_KEY = readTextFile(path.resolve(__dirname, './public.pem'));
export const JWT_RSA_PRIVATE_KEY = readTextFile(path.resolve(__dirname, './private.pem'));
export const JWT_RSA_PUBLIC_KEY_WRONG = readTextFile(path.resolve(__dirname, './wrong_public.pem'));
export const JWT_RSA_PRIVATE_KEY_WRONG = readTextFile(
	path.resolve(__dirname, './wrong_private.pem')
);
