import { fromRpcSig, isValidSignature } from 'ethereumjs-util';
import { signer, verifier } from './secp256k1-2018';

const authKey = {
	// Derived from Public Key:
	// '0x745fabd2efdbf9deb31642b2054ee2bc786ebea096d36c0b1b305edaaf9813c6b4051a334266c9f40b714381c03da5da315ec207000fa7bb74868a5e61421e31'
	ethereumAddress: '0xa53e8abf48e320e5a23dd731127abdabd624759d'
};
const privateKey = '0x93d6672ebb066d39976546660c98508f24f5be6791f6c246e8a07196336853af';
const message =
	'V2Oma9mevaOBvqMhM9uwVLRRIgFD30QDKoF7amiRcyDoU2ftG8a6WRYuMJ3tucebrSle6RqFdPtrHZ7FC2W0KA==';
const forgedMessage =
	'hhw8sw18vTYRxC/jc79v4qniegFRgk1bMMn0YVP06hoO79YCpFhIAx8PeO/chxNi5YJImStOR7eYjz1PvmDABw==';

const { sign } = signer({ privateKey });
const { verify } = verifier();

describe('signer', () => {
	it('invalid key format', async () => {
		try {
			const illSetupSigner = signer({ privateKey: 'invalid' });
			await illSetupSigner.sign(message);
		} catch (err) {
			expect(err.message).toBe('private key length is invalid');
		}
	});

	it('signature has correct format', async () => {
		const signature = await sign(message);
		const { v, r, s } = fromRpcSig(signature);
		expect(isValidSignature(v, r, s)).toBe(true);
	});
});

describe('verify', () => {
	it('signature has invalid length', () => {
		try {
			verify(message, 'invalid', authKey);
		} catch (err) {
			expect(err.message).toBe('Invalid signature length');
		}
	});

	it('forged message', async () => {
		const sig = await sign(forgedMessage);
		expect(verify(message, sig, authKey)).toBe(false);
	});

	it('signature is valid', async () => {
		const sig = await sign(message);
		expect(verify(message, sig, authKey)).toBe(true);
	});
});
