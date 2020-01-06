/**
 * @module did/resolver
 */
import { parse } from './parse';
import { resolver as eth } from './methods/eth-resolver';
import { resolver as selfkey } from './methods/selfkey-resolver';

/**
 * @constant
 * @type object
 *
 * @property {object} eth - eth did resolver
 * @property {object} sekfkey - selfkey did resolver
 */
const resolvers = {
	eth: eth(),
	selfkey: selfkey()
};

/**
 * Checks if a resolver exists for that particular did
 * @function isSupported
 *
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
export const isSupported = did => {
	const { method } = parse(did);
	return Object.keys(resolvers).includes(method);
};

/**
 * Resolves did document
 * @async
 * @function resolve
 *
 * @param {string} did
 * @returns {object} didDocument
 * @example
 * ```js
 * await sk.did.resolve('did:selfkey:0xdsdasddasdsa...');
 * ```
 */
export const resolve = async did => {
	const { method } = parse(did);
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
 *
 * @param {string} method
 * @param {object} resolver
 * @example
 * ```js
 * sk.did.register('new-method', resolver);
 * ```
 */
export const registerMethodResolver = (method, resolver) => {
	// TODO - Check if resolver adheres to interface
	resolvers[method] = resolver;
};
