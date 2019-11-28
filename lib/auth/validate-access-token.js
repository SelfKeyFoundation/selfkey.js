'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports.validateAccessToken = void 0;

var JWT = _interopRequireWildcard(require('../jwt'));

var DID = _interopRequireWildcard(require('../did'));

var _const = require('./const');

function _interopRequireWildcard(obj) {
	if (obj && obj.__esModule) {
		return obj;
	} else {
		var newObj = {};
		if (obj != null) {
			for (var key in obj) {
				if (Object.prototype.hasOwnProperty.call(obj, key)) {
					var desc =
						Object.defineProperty && Object.getOwnPropertyDescriptor
							? Object.getOwnPropertyDescriptor(obj, key)
							: {};
					if (desc.get || desc.set) {
						Object.defineProperty(newObj, key, desc);
					} else {
						newObj[key] = obj[key];
					}
				}
			}
		}
		newObj.default = obj;
		return newObj;
	}
}

const validateAccessToken = async (token, algorithm, key) => {
	const decoded = await JWT.validateJWT(token, algorithm, key);
	if (!decoded || !decoded.payload) throw new Error('Invalid token');
	if (!decoded.payload.sub) throw new Error('Invalid token, subject must be DID');

	try {
		DID.parse(decoded.payload.sub);
	} catch (error) {
		throw new Error('Invalid token, subject must be DID');
	}

	if (decoded.payload.tokenType !== _const.TOKEN_TYPE_ACCESS)
		throw new Error('Invalid token type, access token expected');
	return decoded;
};

exports.validateAccessToken = validateAccessToken;
