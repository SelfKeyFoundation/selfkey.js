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
	const msgHash = hashPersonalMessage(toBuffer(message));
	const { v, r, s } = fromRpcSig(signature);
	const address = bufferToHex(pubToAddress(ecrecover(msgHash, v, r, s)));
	return address.toLowerCase() === authKey.ethereumAddress.toLowerCase();
};

export const verifier = () => ({
	verify
});

export const signer = ({ privateKey }) => ({
	sign: async message => {
		const msgHash = hashPersonalMessage(toBuffer(message));
		const { v, r, s } = ecsign(msgHash, toBuffer(privateKey));
		return toRpcSig(v, r, s);
	}
});
