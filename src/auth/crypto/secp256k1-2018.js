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

export const verifier = () => ({
	verify: (message, signature, authKey) => {
		const msgHash = hashPersonalMessage(toBuffer(message));
		const { v, r, s } = fromRpcSig(signature);
		const address = bufferToHex(pubToAddress(ecrecover(msgHash, v, r, s)));
		return address === authKey.ethereumAddress;
	}
});

export const signer = ({ privateKey }) => ({
	sign: async message => {
		const msgHash = hashPersonalMessage(toBuffer(message));
		const { v, r, s } = ecsign(msgHash, toBuffer(privateKey));
		return toRpcSig(v, r, s);
	}
});
