export const parse = did => {
	const match = /^did:(\w+):(\w+)$/.exec(did); // TODO - Check if there are no exceptions to this
	if (!match) {
		throw new Error('Not a DID');
	}
	const [, method, idString] = match;
	return { method, idString };
};
