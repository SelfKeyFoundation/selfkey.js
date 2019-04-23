'use strict';

var _lolex = _interopRequireDefault(require('lolex'));

var _jsonwebtoken = _interopRequireDefault(require('jsonwebtoken'));

var _validate = require('./validate');

var _keys = require('./__fixtures__/keys');

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

describe('validateJWT', () => {
	let clock;
	beforeEach(() => {
		clock = _lolex.default.install({
			now: 1556030699872,
			toFake: ['Date']
		});
	});
	afterEach(() => {
		clock.uninstall();
	});
	it('should validate HMAC signed token', async () => {
		const token = _jsonwebtoken.default.sign(
			{
				test: 'test'
			},
			_keys.JWT_HMAC_SECRET,
			{
				algorithm: 'HS512'
			}
		);

		expect(await (0, _validate.validateJWT)(token, 'HMAC', _keys.JWT_HMAC_SECRET)).toEqual(
			_jsonwebtoken.default.decode(token, {
				complete: true,
				json: true
			})
		);
	});
	it('should validate RSA signed token with public key', async () => {
		const token = _jsonwebtoken.default.sign(
			{
				test: 'test'
			},
			_keys.JWT_RSA_PRIVATE_KEY,
			{
				algorithm: 'RS512'
			}
		);

		expect(await (0, _validate.validateJWT)(token, 'RSA', _keys.JWT_RSA_PUBLIC_KEY)).toEqual(
			_jsonwebtoken.default.decode(token, {
				complete: true,
				json: true
			})
		);
	});
	it('should throw error if declared algorithm does not match token algorithm', async () => {
		const token = _jsonwebtoken.default.sign(
			{
				test: 'test'
			},
			_keys.JWT_RSA_PRIVATE_KEY,
			{
				algorithm: 'RS512'
			}
		);

		let validationError;

		try {
			await (0, _validate.validateJWT)(token, 'HMAC', _keys.JWT_RSA_PUBLIC_KEY);
		} catch (error) {
			validationError = error;
		}

		expect(validationError).toBeDefined();
		expect(validationError.message).toEqual('invalid algorithm');
	});
	it('should throw error if HMAC secret is invalid', async () => {
		const token = _jsonwebtoken.default.sign(
			{
				test: 'test'
			},
			_keys.JWT_HMAC_SECRET,
			{
				algorithm: 'HS512'
			}
		);

		let validationError;

		try {
			await (0, _validate.validateJWT)(token, 'HMAC', 'wrong secret');
		} catch (error) {
			validationError = error;
		}

		expect(validationError).toBeDefined();
	});
	it('should throw error if RSA key is invalid', async () => {
		const token = _jsonwebtoken.default.sign(
			{
				test: 'test'
			},
			_keys.JWT_RSA_PRIVATE_KEY,
			{
				algorithm: 'RS512'
			}
		);

		let validationError;

		try {
			await (0, _validate.validateJWT)(token, 'RSA', _keys.JWT_RSA_PUBLIC_KEY_WRONG);
		} catch (error) {
			validationError = error;
		}

		expect(validationError).toBeDefined();
	});
});
