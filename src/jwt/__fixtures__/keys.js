import path from 'path';
import { readTextFile } from '../../../test/utils';

export const JWT_HMAC_SECRET = 'super secret test prase';

export const JWT_RSA_PUBLIC_KEY = readTextFile(path.resolve(__dirname, './public.pem'));
export const JWT_RSA_PRIVATE_KEY = readTextFile(path.resolve(__dirname, './private.pem'));
export const JWT_RSA_PUBLIC_KEY_WRONG = readTextFile(path.resolve(__dirname, './wrong_public.pem'));
