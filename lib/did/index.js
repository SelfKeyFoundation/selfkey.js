'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _resolver = require('./resolver');

Object.keys(_resolver).forEach(function(key) {
	if (key === 'default' || key === '__esModule') return;
	Object.defineProperty(exports, key, {
		enumerable: true,
		get: function() {
			return _resolver[key];
		}
	});
});
