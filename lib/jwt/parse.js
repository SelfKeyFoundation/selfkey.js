"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.parseJWT = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module jwt/parse
 */

/**
 * Parse a JWT token
 * @function parseJWT
 *
 * @param {string} token - jwt token
 * @returns {object} decodedJwt
 * @example
 *
 * ```js
 * sk.jwt.parseJWT(token);
 * ```
 */
const parseJWT = token => {
  return _jsonwebtoken.default.decode(token, {
    complete: true,
    json: true
  });
};

exports.parseJWT = parseJWT;
var _default = parseJWT;
exports.default = _default;