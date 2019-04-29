'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports.generateAccessToken = void 0;

var _jwt = require('../jwt');

var _const = require('./const');

const generateAccessToken = async (did, algorithm, secret, expiresIn = '1h') => {
	return (0, _jwt.issueJWT)(did, algorithm, secret, expiresIn, {
		tokenType: _const.TOKEN_TYPE_ACCESS
	});
};

exports.generateAccessToken = generateAccessToken;
