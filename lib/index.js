"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.identity = exports.kycc = exports.did = exports.jwt = exports.key = exports.auth = exports.default = void 0;

var auth = _interopRequireWildcard(require("./auth"));

exports.auth = auth;

var key = _interopRequireWildcard(require("../key"));

exports.key = key;

var jwt = _interopRequireWildcard(require("./jwt"));

exports.jwt = jwt;

var did = _interopRequireWildcard(require("./did"));

exports.did = did;

var kycc = _interopRequireWildcard(require("./kycc"));

exports.kycc = kycc;

var identity = _interopRequireWildcard(require("./identity"));

exports.identity = identity;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = {
  auth,
  key,
  jwt,
  did,
  kycc,
  identity
};
exports.default = _default;