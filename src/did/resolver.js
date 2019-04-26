import { parse } from './parse';
import { resolver as eth } from './methods/eth_resolver';
import { resolver as selfkey } from './methods/selfkey_resolver';

const resolvers = {
	eth: eth(),
	selfkey: selfkey()
};

export const isSupported = did => {
	const { method } = parse(did);
	return Object.keys(resolvers).includes(method);
};

export const resolve = async did => {
	const { method } = parse(did);
	const resolver = resolvers[method];
	if (!resolver) {
		throw new Error('Unsupported DID method');
	}
	return resolver.resolve(did);
};

export const registerMethodResolver = (method, resolver) => {
	// TODO - Check if resolver adheres to interface
	resolvers[method] = resolver;
};
