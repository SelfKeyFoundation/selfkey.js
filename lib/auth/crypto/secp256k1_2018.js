'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports.signer = exports.verifier = void 0;

var _ethereumjsUtil = require('ethereumjs-util');

const verifier = () => ({
	verify: (message, signature, authKey) => {
		const msgHash = (0, _ethereumjsUtil.hashPersonalMessage)(
			(0, _ethereumjsUtil.toBuffer)(message)
		);
		const { v, r, s } = (0, _ethereumjsUtil.fromRpcSig)(signature);
		const address = (0, _ethereumjsUtil.bufferToHex)(
			(0, _ethereumjsUtil.pubToAddress)((0, _ethereumjsUtil.ecrecover)(msgHash, v, r, s))
		);
		return address === authKey.ethereumAddress;
	}
});

exports.verifier = verifier;

const signer = ({ privateKey }) => ({
	sign: async message => {
		const msgHash = (0, _ethereumjsUtil.hashPersonalMessage)(
			(0, _ethereumjsUtil.toBuffer)(message)
		);
		const { v, r, s } = (0, _ethereumjsUtil.ecsign)(
			msgHash,
			(0, _ethereumjsUtil.toBuffer)(privateKey)
		);
		return (0, _ethereumjsUtil.toRpcSig)(v, r, s);
	}
});

exports.signer = signer;
