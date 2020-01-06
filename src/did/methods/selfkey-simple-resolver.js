import { abi as ledgerABI } from '../../assets/DIDLedger.json';
import Web3 from 'web3';

export const CONTRACT_CONFIG = {
	mainnet: {
		url: 'wss://mainnet.infura.io/ws/v3/2e5fb5cf42714929a7f61a1617ef1ffd',
		address: '0x0cb853331293d689c95187190e09bb46cb4e533e'
	},
	ropsten: {
		url: 'wss://ropsten.infura.io/ws/v3/2e5fb5cf42714929a7f61a1617ef1ffd',
		address: '0x27332286A2CEaE458b82A1235f7E2a3Aa8945cAB'
	}
};

export const getControllerAddress = async (idString, chain) => {
	const contractConfig = CONTRACT_CONFIG[chain];
	if (!contractConfig) throw new Error('Not a valid Chain');
	const web3 = new Web3(contractConfig.url);
	const ledger = new web3.eth.Contract(ledgerABI, contractConfig.address);
	const address = await ledger.methods.getController(idString).call();
	return address !== '0x0000000000000000000000000000000000000000' ? address : null;
};
