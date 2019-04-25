'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports.generateChallengeToken = void 0;

var _jwt = require('../jwt');

var _generateNonce = require('./generate-nonce');

var _const = require('./const');

const generateChallengeToken = async (did, algorithm, secret, expiresIn = '30m') => {
	const nonce = await (0, _generateNonce.generateNonce)();
	return (0, _jwt.issueJWT)(did, algorithm, secret, expiresIn, {
		nonce,
		tokenType: _const.TOKEN_TYPE_CHALLENGE
	});
};

exports.generateChallengeToken = generateChallengeToken;
