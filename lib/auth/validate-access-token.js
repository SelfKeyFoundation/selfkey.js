"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateAccessToken = void 0;

var JWT = _interopRequireWildcard(require("../jwt"));

var DID = _interopRequireWildcard(require("../did"));

var _const = require("./const");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @module auth/validate-access-token
 */

/**
 * Validates access token
 *
 * @async
 * @function validateAccessToken
 *
 * @param {string} token
 * @param {string} algorithm
 * @param {string|Buffer} key
 * @returns {Promise<object>} decodedToken
 * @throws If token is invalid
 * @throws if subject is not did
 * @throws if token type is not access
 * @example
 * await sk.auth.validateAccessToken(token, 'hmac', 'secret');
 */
const validateAccessToken = async (token, algorithm, key) => {
  const decoded = await JWT.validateJWT(token, algorithm, key);
  if (!decoded || !decoded.payload) throw new Error('Invalid token');
  if (!decoded.payload.sub) throw new Error('Invalid token, subject must be DID');

  try {
    DID.parse(decoded.payload.sub);
  } catch (error) {
    throw new Error('Invalid token, subject must be DID');
  }

  if (decoded.payload.tokenType !== _const.TOKEN_TYPE_ACCESS) throw new Error('Invalid token type, access token expected');
  return decoded;
};

exports.validateAccessToken = validateAccessToken;