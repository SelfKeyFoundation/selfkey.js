'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports.generateNonce = void 0;

var _crypto = _interopRequireDefault(require('crypto'));

var _util = _interopRequireDefault(require('util'));

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

const randomBytes = _util.default.promisify(_crypto.default.randomBytes);

const generateNonce = async (length = 64) => {
	const buffer = await randomBytes(length);
	return buffer.toString('base64');
};

exports.generateNonce = generateNonce;
