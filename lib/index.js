'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _auth = require('./auth');

Object.keys(_auth).forEach(function(key) {
	if (key === 'default' || key === '__esModule') return;
	Object.defineProperty(exports, key, {
		enumerable: true,
		get: function() {
			return _auth[key];
		}
	});
});

var _jwt = require('./jwt');

Object.keys(_jwt).forEach(function(key) {
	if (key === 'default' || key === '__esModule') return;
	Object.defineProperty(exports, key, {
		enumerable: true,
		get: function() {
			return _jwt[key];
		}
	});
});

var _did = require('./did');

Object.keys(_did).forEach(function(key) {
	if (key === 'default' || key === '__esModule') return;
	Object.defineProperty(exports, key, {
		enumerable: true,
		get: function() {
			return _did[key];
		}
	});
});

var _kycc = require('./kycc');

Object.keys(_kycc).forEach(function(key) {
	if (key === 'default' || key === '__esModule') return;
	Object.defineProperty(exports, key, {
		enumerable: true,
		get: function() {
			return _kycc[key];
		}
	});
});
