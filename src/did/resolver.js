import { parse } from './parse';
import * as eth from './methods/eth_resolver';
import * as selfkey from './methods/selfkey_resolver';

const resolvers = { eth, selfkey };

export const isSupported = did => {
	const { method } = parse(did);
	return Object.keys(resolvers).includes(method);
};

export const resolve = async did => {
	const { method } = parse(did);
	const resolver = resolvers[method];
	if (!resolver) {
		return Promise.reject(new Error('Unsupported DID method'));
	}
	return resolver.resolve(did);
};

export const registerMethodResolver = (method, resolver) => {
	// TODO - Check if resolver adheres to interface
	resolvers[method] = resolver;
};
