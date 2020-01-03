"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateChallengeToken = void 0;

var _jwt = require("../jwt");

var _generateNonce = require("./generate-nonce");

var _const = require("./const");

/**
 * @module auth/generate-challenge-token
 */

/**
 * Generate challenge token
 *
 * @async
 * @function generateChallengeToken
 * @param {string} did
 * @param {string} algorithm
 * @param {string} secret
 * @param {string} [expiresIn='30m']
 * @returns {Promise<string>} jwtToken
 * @example
 * await sk.auth.generateChallengeToken(did, 'rsa', 'secret')
 */
const generateChallengeToken = async (did, algorithm, secret, expiresIn = '30m') => {
  const nonce = await (0, _generateNonce.generateNonce)();
  return (0, _jwt.issueJWT)(did, algorithm, secret, expiresIn, {
    nonce,
    tokenType: _const.TOKEN_TYPE_CHALLENGE
  });
};

exports.generateChallengeToken = generateChallengeToken;