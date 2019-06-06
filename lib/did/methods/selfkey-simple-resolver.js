'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports.getControllerAddress = exports.CONTRACT_CONFIG = void 0;

var _DIDLedger = require('./DIDLedger.json');

var _web = _interopRequireDefault(require('web3'));

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

const CONTRACT_CONFIG = {
	mainnet: {
		url: 'wss://mainnet.infura.io/ws/v3/2e5fb5cf42714929a7f61a1617ef1ffd',
		address: '0x0cb853331293d689c95187190e09bb46cb4e533e'
	},
	ropsten: {
		url: 'wss://ropsten.infura.io/ws/v3/2e5fb5cf42714929a7f61a1617ef1ffd',
		address: '0x27332286A2CEaE458b82A1235f7E2a3Aa8945cAB'
	}
};
exports.CONTRACT_CONFIG = CONTRACT_CONFIG;

const getControllerAddress = async (idString, chain) => {
	const contractConfig = CONTRACT_CONFIG[chain];
	if (!contractConfig) throw new Error('Not a valid Chain');
	const web3 = new _web.default(contractConfig.url);
	const ledger = new web3.eth.Contract(_DIDLedger.abi, contractConfig.address);
	return ledger.methods.getController(idString).call();
};

exports.getControllerAddress = getControllerAddress;
