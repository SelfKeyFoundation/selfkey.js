"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "generateChallengeToken", {
  enumerable: true,
  get: function () {
    return _generateChallengeToken.generateChallengeToken;
  }
});
Object.defineProperty(exports, "generateNonce", {
  enumerable: true,
  get: function () {
    return _generateNonce.generateNonce;
  }
});
Object.defineProperty(exports, "generateAccessToken", {
  enumerable: true,
  get: function () {
    return _generateAccessToken.generateAccessToken;
  }
});
Object.defineProperty(exports, "validateChallengeToken", {
  enumerable: true,
  get: function () {
    return _validateChallengeToken.validateChallengeToken;
  }
});
Object.defineProperty(exports, "validateAccessToken", {
  enumerable: true,
  get: function () {
    return _validateAccessToken.validateAccessToken;
  }
});
Object.defineProperty(exports, "verifyChallengeSignature", {
  enumerable: true,
  get: function () {
    return _verifyChallengeSignature.verifyChallengeSignature;
  }
});
exports.constants = void 0;

var constants = _interopRequireWildcard(require("./const"));

exports.constants = constants;

var _generateChallengeToken = require("./generate-challenge-token");

var _generateNonce = require("./generate-nonce");

var _generateAccessToken = require("./generate-access-token");

var _validateChallengeToken = require("./validate-challenge-token");

var _validateAccessToken = require("./validate-access-token");

var _verifyChallengeSignature = require("./verify-challenge-signature");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }