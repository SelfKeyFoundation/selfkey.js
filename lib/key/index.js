"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "generateHMACKey", {
  enumerable: true,
  get: function () {
    return _hmac.generateHMACKey;
  }
});
Object.defineProperty(exports, "generateRSAKeyPair", {
  enumerable: true,
  get: function () {
    return _rsa.generateRSAKeyPair;
  }
});
Object.defineProperty(exports, "checkSecretLength", {
  enumerable: true,
  get: function () {
    return _validatePrivateKeySize.checkSecretLength;
  }
});

var _hmac = require("./hmac");

var _rsa = require("./rsa");

var _validatePrivateKeySize = require("./validate-private-key-size");