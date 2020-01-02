"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerMethodResolver = exports.resolve = exports.isSupported = void 0;

var _parse = require("./parse");

var _ethResolver = require("./methods/eth-resolver");

var _selfkeyResolver = require("./methods/selfkey-resolver");

/**
 * @constant
 * @type object
 * @memberof did
 * @property {object} eth - eth did resolver
 * @property {object} sekfkey - selfkey did resolver
 */
const resolvers = {
  eth: (0, _ethResolver.resolver)(),
  selfkey: (0, _selfkeyResolver.resolver)()
};
/**
 * Checks if a resolver exists for that particular did
 * @function isSupported
 * @memberof did
 * @param {string} did
 * @returns {boolean} isSuppored
 * @example
 *
 * ```js
 * sk.did.isSupported('did:selfkey:0xdsdasddasdsa...'); // true
 * sk.did.isSupported('did:eth:0xdsdasddasdsa...'); // true
 * sk.did.isSupported('did:unknown:0xdsdasddasdsa...'); // false
 * ```
 */

const isSupported = did => {
  const {
    method
  } = (0, _parse.parse)(did);
  return Object.keys(resolvers).includes(method);
};
/**
 * Resolves did document
 * @async
 * @function resolve
 * @memberof did
 * @param {string} did
 * @returns {object} didDocument
 * @example
 * ```js
 * await sk.did.resolve('did:selfkey:0xdsdasddasdsa...');
 * ```
 */


exports.isSupported = isSupported;

const resolve = async did => {
  const {
    method
  } = (0, _parse.parse)(did);
  const resolver = resolvers[method];

  if (!resolver) {
    throw new Error('Unsupported DID method');
  }

  return resolver.resolve(did);
};
/**
 * Register custom resolver for a did method
 *
 * @function registerMethodResolver
 * @memberof did
 * @param {string} method
 * @param {object} resolver
 * @example
 * ```js
 * sk.did.register('new-method', resolver);
 * ```
 */


exports.resolve = resolve;

const registerMethodResolver = (method, resolver) => {
  // TODO - Check if resolver adheres to interface
  resolvers[method] = resolver;
};

exports.registerMethodResolver = registerMethodResolver;