import {
	bufferToHex,
	ecrecover,
	ecsign,
	fromRpcSig,
	hashPersonalMessage,
	pubToAddress,
	toBuffer,
	toRpcSig
} from 'ethereumjs-util';

const verify = (message, signature, authKey) => {
	try {
		const msgHash = hashPersonalMessage(Buffer.from(message));
		const { v, r, s } = fromRpcSig(signature);
		const address = bufferToHex(pubToAddress(ecrecover(msgHash, v, r, s)));
		return address.toLowerCase() === authKey.ethereumAddress.toLowerCase();
	} catch (error) {
		throw new Error('Invalid signature');
	}
};

export const verifier = () => ({
	verify
});

export const signer = ({ privateKey }) => ({
	sign: async message => {
		try {
			const msgHash = hashPersonalMessage(Buffer.from(message));
			const { v, r, s } = ecsign(msgHash, toBuffer(privateKey));
			return toRpcSig(v, r, s);
		} catch (error) {
			throw new Error('private key length is invalid');
		}
	}
});
