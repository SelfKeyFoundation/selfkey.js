'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
Object.defineProperty(exports, 'createKYCCIntegrationsClient', {
	enumerable: true,
	get: function() {
		return _kyccIntegrationsClient.createClient;
	}
});
Object.defineProperty(exports, 'createKYCCInternalClient', {
	enumerable: true,
	get: function() {
		return _kyccInternalClient.createClient;
	}
});
Object.defineProperty(exports, 'getKYCCUserDataForToken', {
	enumerable: true,
	get: function() {
		return _getUserDataForToken.getUserDataForToken;
	}
});

var _kyccIntegrationsClient = require('./kycc-integrations-client');

var _kyccInternalClient = require('./kycc-internal-client');

var _getUserDataForToken = require('./get-user-data-for-token');
