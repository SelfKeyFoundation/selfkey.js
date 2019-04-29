'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports.generateNonce = void 0;

var _key = require('../key');

const generateNonce = async length => {
	return (0, _key.generateHMACKey)(length, 'base64');
};

exports.generateNonce = generateNonce;
