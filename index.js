'use strict';

var define = require('define-properties');
var isSymbol = require('is-symbol');

var globalKey = '__ global cache key __';
if (typeof Symbol === 'function' && typeof Symbol['for'] === 'function') {
	globalKey = Symbol['for'](globalKey);
}
if (!global[globalKey]) {
	var properties = {};
	properties[globalKey] = {};
	define(global, properties);
}

var cache = global[globalKey];

var isPrimitive = function isPrimitive(val) {
	return val === null || (typeof val !== 'object' && typeof val !== 'function');
};

var getPrimitiveKey = function getPrimitiveKey(val) {
	if (isSymbol(val)) {
		return Symbol.prototype.valueOf.call(val);
	}
	return typeof val + ' | ' + String(val);
};

var requirePrimitiveKey = function requirePrimitiveKey(val) {
	if (!isPrimitive(val)) {
		throw new TypeError('key must not be an object');
	}
};

var globalCache = {
	has: function has(key) {
		requirePrimitiveKey(key);
		return getPrimitiveKey(key) in cache;
	},

	get: function get(key) {
		requirePrimitiveKey(key);
		return cache[getPrimitiveKey(key)];
	},

	set: function set(key, value) {
		requirePrimitiveKey(key);
		var props = {};
		props[getPrimitiveKey(key)] = value;
		define(cache, props);
		return globalCache.has(key);
	},

	'delete': function deleteKey(key) {
		requirePrimitiveKey(key);
		delete cache[getPrimitiveKey(key)];
		return !globalCache.has(key);
	}
};

module.exports = globalCache;
