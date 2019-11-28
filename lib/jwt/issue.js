'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports.default = exports.issueJWT = void 0;

var _util = require('util');

var _jsonwebtoken = _interopRequireDefault(require('jsonwebtoken'));

var _const = require('./const');

var _key = require('../key');

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

const signJWT = (0, _util.promisify)(_jsonwebtoken.default.sign);

const issueJWT = (subject, requestedAlgorithm, secret, expiresIn = '1h', additionalClaims = {}) => {
	const payload = { ...additionalClaims };
	delete payload.exp;
	delete payload.iat;
	delete payload.sub;

	const algorithm = _const.JWT_ALGORITHMS[(requestedAlgorithm || '').toUpperCase()];

	if (!algorithm) {
		throw new Error(`Unknown algorithm ${requestedAlgorithm}`);
	}

	if (!(0, _key.checkSecretLength)(secret, algorithm)) {
		throw new Error('Insecure secret');
	}

	const options = {
		algorithm,
		subject,
		expiresIn
	};
	return signJWT(payload, secret, options);
};

exports.issueJWT = issueJWT;
var _default = issueJWT;
exports.default = _default;
