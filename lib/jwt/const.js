"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JWT_ALGORITHMS = void 0;

/**
 * @module jwt/constants
 */

/**
 * @constant
 * @private
 * @type object
 * @name JWT_ALGORITHMS
 *
 * @property RSA - RSA algorithm name
 * @property HMAC - HMAC algorithm name
 */
const JWT_ALGORITHMS = {
  RSA: 'RS512',
  HMAC: 'HS512'
};
exports.JWT_ALGORITHMS = JWT_ALGORITHMS;