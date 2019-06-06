import Web3 from 'web3';
import { getControllerAddress } from './selfkey-simple-resolver';

const mockGetController = jest.fn();
const mockGetControllerCall = jest.fn();
mockGetController.mockReturnValue({ call: mockGetControllerCall });

jest.mock('web3', () => {
	return jest.fn().mockImplementation(() => {
		return {
			eth: {
				Contract: jest.fn().mockImplementation(() => {
					return {
						methods: {
							getController: mockGetController
						}
					};
				})
			}
		};
	});
});

describe('Selfkey Simple Resolver', () => {
	beforeEach(() => {
		Web3.mockClear();
		mockGetController.mockClear();
		mockGetControllerCall.mockClear();
	});

	it('Get Controller Address from Main', async () => {
		const address = '0x27462DF3542882455E3bD6a23496a06E5E686162';
		const idString = '0x11c47898a9d3498986129cdb0b8ac3ed468f5e400cb0076d40f355ad1ad2a120';

		mockGetControllerCall.mockReturnValue('0x27462DF3542882455E3bD6a23496a06E5E686162');
		const actualAddress = await getControllerAddress(idString, 'main');
		expect(Web3).toHaveBeenCalledWith(
			'wss://mainnet.infura.io/ws/v3/2e5fb5cf42714929a7f61a1617ef1ffd'
		);
		expect(actualAddress).toEqual(address);
	});

	it('Get Controller Address from Ropsten', async () => {
		const address = '0x27462DF3542882455E3bD6a23496a06E5E686162';
		const idString = '0x11c47898a9d3498986129cdb0b8ac3ed468f5e400cb0076d40f355ad1ad2a120';

		mockGetControllerCall.mockReturnValue('0x27462DF3542882455E3bD6a23496a06E5E686162');
		const actualAddress = await getControllerAddress(idString, 'ropsten');
		expect(Web3).toHaveBeenCalledWith(
			'wss://ropsten.infura.io/ws/v3/2e5fb5cf42714929a7f61a1617ef1ffd'
		);
		expect(actualAddress).toEqual(address);
	});

	it('Get invalid chain error', async () => {
		const idString = '0x11c47898a9d3498986129cdb0b8ac3ed468f5e400cb0076d40f355ad1ad2a120';
		try {
			await getControllerAddress(idString, 'invalid');
		} catch (error) {
			expect(error.message).toBe('Not a valid Chain');
		}
	});
});
