'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports.isValidPrivateKeySize = void 0;

var _hmac = require('./hmac');

var _rsa = require('./rsa');

const isValidPrivateKeySize = (key, algorithm) => {
	switch (algorithm) {
		case 'HS512':
			return (0, _hmac.getSecretLength)(key) >= 64;

		case 'RS512':
			return (0, _rsa.getPEMBits)(key) >= 4096;
	}

	return false;
};

exports.isValidPrivateKeySize = isValidPrivateKeySize;
