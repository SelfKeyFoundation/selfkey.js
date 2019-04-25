'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports.getSecretLength = exports.generateHMACKey = void 0;

var _crypto = _interopRequireDefault(require('crypto'));

var _util = _interopRequireDefault(require('util'));

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

const randomBytes = _util.default.promisify(_crypto.default.randomBytes);

const generateHMACKey = async (length = 64, encoding = 'base64') => {
	const bytes = await randomBytes(length);

	if (!encoding) {
		return bytes;
	}

	return bytes.toString(encoding);
};

exports.generateHMACKey = generateHMACKey;

const getSecretLength = (secret, encoding = 'base64') => {
	if (!Buffer.isBuffer(secret)) {
		secret = Buffer.from(secret, encoding);
	}

	return secret.length;
};

exports.getSecretLength = getSecretLength;
