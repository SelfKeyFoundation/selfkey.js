import { parse } from '../parse';
import { getControllerAddress } from './selfkey_simple_resolver';

const isValidIdentifier = idString => {
	return !!idString.match(/^0x[0-9a-fA-F]{64}$/);
};

const generateDocument = (did, address) => ({
	'@context': 'https://www.w3.org/2019/did/v1',
	id: did,
	publicKey: [
		{
			id: `${did}#keys-1`,
			type: 'Secp256k1VerificationKey2018',
			controller: did,
			ethereumAddress: address
		}
	],
	authentication: [`${did}#keys-1`]
});

export const resolve = async did => {
	const { method, idString } = parse(did);
	if (method !== 'selfkey' || !isValidIdentifier(idString)) {
		return Promise.reject(new Error('Not a valid selfkey DID'));
	}
	const address = await getControllerAddress(idString);
	return Promise.resolve(generateDocument(did, address));
};
