"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkSecretLength = void 0;

var _hmac = require("./hmac");

var _rsa = require("./rsa");

/**
 * @module key/validate-private-key
 */

/**
 * Checks if secret length is good enough
 * @function checkSecretLength
 *
 * @param {string} key
 * @param {string} algorithm
 * @returns {boolean} - isKeyLongEnough
 * @example
 *
 * ```js
 * sk.key.checkSecretLength();
 * ```
 */
const checkSecretLength = (key, algorithm) => {
  switch (algorithm) {
    case 'HS512':
      return (0, _hmac.getSecretLength)(key) >= 64;

    case 'RS512':
      return (0, _rsa.getPEMBits)(key) >= 4096;
  }

  return false;
};

exports.checkSecretLength = checkSecretLength;