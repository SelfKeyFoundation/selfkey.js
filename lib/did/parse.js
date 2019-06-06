'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports.parse = void 0;

const parse = did => {
	const match = /^did:(\w+):(\w+)((?:;\w+:\w+=\w+)*)$/.exec(did); // TODO - Check if there are no exceptions to this

	if (!match) {
		throw new Error('Not a DID');
	}

	const [, method, idString, paramString] = match;
	const params = (paramString.match(new RegExp('\\w+:(\\w+=\\w+)', 'g')) || []).reduce(
		(result, each, n, every) => {
			let [key, value] = each.split('=');
			result[key] = value;
			return result;
		},
		{}
	);
	return {
		method,
		idString,
		params
	};
};

exports.parse = parse;
