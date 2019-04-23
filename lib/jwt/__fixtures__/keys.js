'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports.JWT_RSA_PUBLIC_KEY_WRONG = exports.JWT_RSA_PRIVATE_KEY = exports.JWT_RSA_PUBLIC_KEY = exports.JWT_HMAC_SECRET = void 0;

var _path = _interopRequireDefault(require('path'));

var _utils = require('../../../test/utils');

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

const JWT_HMAC_SECRET = 'super secret test prase';
exports.JWT_HMAC_SECRET = JWT_HMAC_SECRET;
const JWT_RSA_PUBLIC_KEY = (0, _utils.readTextFile)(
	_path.default.resolve(__dirname, './public.pem')
);
exports.JWT_RSA_PUBLIC_KEY = JWT_RSA_PUBLIC_KEY;
const JWT_RSA_PRIVATE_KEY = (0, _utils.readTextFile)(
	_path.default.resolve(__dirname, './private.pem')
);
exports.JWT_RSA_PRIVATE_KEY = JWT_RSA_PRIVATE_KEY;
const JWT_RSA_PUBLIC_KEY_WRONG = (0, _utils.readTextFile)(
	_path.default.resolve(__dirname, './wrong_public.pem')
);
exports.JWT_RSA_PUBLIC_KEY_WRONG = JWT_RSA_PUBLIC_KEY_WRONG;
