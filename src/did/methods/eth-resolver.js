import { isValidAddress } from 'ethereumjs-util';
import { parse } from '../parse';

const generateDocument = (did, address) => ({
	'@context': 'https://www.w3.org/2019/did/v1',
	id: did,
	publicKey: [
		{
			id: `${did}#keys-1`,
			type: 'EcdsaSecp256k1VerificationKey2019',
			controller: did,
			ethereumAddress: address
		}
	],
	authentication: [`${did}#keys-1`]
});

export const resolver = () => ({
	resolve: async did => {
		const { method, idString } = parse(did);
		if (method !== 'eth' || !isValidAddress(idString)) {
			throw new Error('Not a valid eth DID');
		}
		return generateDocument(did, idString);
	}
});
