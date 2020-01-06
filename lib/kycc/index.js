"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "createKYCCIntegrationsClient", {
  enumerable: true,
  get: function () {
    return _kyccIntegrationsClient.createClient;
  }
});
Object.defineProperty(exports, "createKYCCInternalClient", {
  enumerable: true,
  get: function () {
    return _kyccInternalClient.createClient;
  }
});
Object.defineProperty(exports, "getKYCCUserDataForToken", {
  enumerable: true,
  get: function () {
    return _getUserDataForToken.getUserDataForToken;
  }
});
exports.utils = void 0;

var utils = _interopRequireWildcard(require("./utils"));

exports.utils = utils;

var _kyccIntegrationsClient = require("./kycc-integrations-client");

var _kyccInternalClient = require("./kycc-internal-client");

var _getUserDataForToken = require("./get-user-data-for-token");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }