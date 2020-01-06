"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signer = exports.verifier = void 0;

var _ethereumjsUtil = require("ethereumjs-util");

const verify = (message, signature, authKey) => {
  try {
    const msgHash = (0, _ethereumjsUtil.hashPersonalMessage)(Buffer.from(message));
    const {
      v,
      r,
      s
    } = (0, _ethereumjsUtil.fromRpcSig)(signature);
    const address = (0, _ethereumjsUtil.bufferToHex)((0, _ethereumjsUtil.pubToAddress)((0, _ethereumjsUtil.ecrecover)(msgHash, v, r, s)));
    return address.toLowerCase() === authKey.ethereumAddress.toLowerCase();
  } catch (error) {
    throw new Error('Invalid signature');
  }
};

const verifier = () => ({
  verify
});

exports.verifier = verifier;

const signer = ({
  privateKey
}) => ({
  sign: async message => {
    try {
      const msgHash = (0, _ethereumjsUtil.hashPersonalMessage)(Buffer.from(message));
      const {
        v,
        r,
        s
      } = (0, _ethereumjsUtil.ecsign)(msgHash, (0, _ethereumjsUtil.toBuffer)(privateKey));
      return (0, _ethereumjsUtil.toRpcSig)(v, r, s);
    } catch (error) {
      throw new Error('private key length is invalid');
    }
  }
});

exports.signer = signer;