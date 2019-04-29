'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports.default = exports.validateJWT = void 0;

var _jsonwebtoken = _interopRequireDefault(require('jsonwebtoken'));

var _util = require('util');

var _const = require('./const');

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

const verifyJWT = (0, _util.promisify)(_jsonwebtoken.default.verify);

const validateJWT = (token, requestedAlgorithm, key) => {
	const algorithm = _const.JWT_ALGORITHMS[(requestedAlgorithm || '').toUpperCase()];

	if (!algorithm) {
		throw new Error(`Unknown algorithm ${requestedAlgorithm}`);
	}

	const options = {
		algorithms: [algorithm],
		complete: true,
		json: true
	};
	return verifyJWT(token, key, options);
};

exports.validateJWT = validateJWT;
var _default = validateJWT;
exports.default = _default;
