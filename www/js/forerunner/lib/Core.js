/*
 License

 Copyright (c) 2015 Irrelon Software Limited
 http://www.irrelon.com
 http://www.forerunnerdb.com

 Please visit the license page to see latest license information:
 http://www.forerunnerdb.com/licensing.html
 */
"use strict";

var Shared,
	Db,
	Metrics,
	Overload,
	_instances = [];

Shared = require('./Shared');
Overload = require('./Overload');

/**
 * Creates a new ForerunnerDB instance. Core instances handle the lifecycle of
 * multiple database instances.
 * @constructor
 */
var Core = function (name) {
	this.init.apply(this, arguments);
};

Core.prototype.init = function (name) {
	this._db = {};
	this._debug = {};
	this._name = name || 'ForerunnerDB';

	_instances.push(this);
};

/**
 * Returns the number of instantiated ForerunnerDB objects.
 * @returns {Number} The number of instantiated instances.
 */
Core.prototype.instantiatedCount = function () {
	return _instances.length;
};

/**
 * Get all instances as an array or a single ForerunnerDB instance
 * by it's array index.
 * @param {Number=} index Optional index of instance to get.
 * @returns {Array|Object} Array of instances or a single instance.
 */
Core.prototype.instances = function (index) {
	if (index !== undefined) {
		return _instances[index];
	}

	return _instances;
};

/**
 * Get all instances as an array of instance names or a single ForerunnerDB
 * instance by it's name.
 * @param {String=} name Optional name of instance to get.
 * @returns {Array|Object} Array of instance names or a single instance.
 */
Core.prototype.namedInstances = function (name) {
	var i,
		instArr;

	if (name !== undefined) {
		for (i = 0; i < _instances.length; i++) {
			if (_instances[i].name === name) {
				return _instances[i];
			}
		}

		return undefined;
	}

	instArr = [];

	for (i = 0; i < _instances.length; i++) {
		instArr.push(_instances[i].name);
	}

	return instArr;
};

Core.prototype.moduleLoaded = new Overload({
	/**
	 * Checks if a module has been loaded into the database.
	 * @func moduleLoaded
	 * @memberof Core
	 * @param {String} moduleName The name of the module to check for.
	 * @returns {Boolean} True if the module is loaded, false if not.
	 */
	'string': function (moduleName) {
		if (moduleName !== undefined) {
			moduleName = moduleName.replace(/ /g, '');

			var modules = moduleName.split(','),
				index;

			for (index = 0; index < modules.length; index++) {
				if (!Shared.modules[modules[index]]) {
					return false;
				}
			}

			return true;
		}

		return false;
	},

	/**
	 * Checks if a module is loaded and if so calls the passed
	 * callback method.
	 * @func moduleLoaded
	 * @memberof Core
	 * @param {String} moduleName The name of the module to check for.
	 * @param {Function} callback The callback method to call if module is loaded.
	 */
	'string, function': function (moduleName, callback) {
		if (moduleName !== undefined) {
			moduleName = moduleName.replace(/ /g, '');

			var modules = moduleName.split(','),
				index;

			for (index = 0; index < modules.length; index++) {
				if (!Shared.modules[modules[index]]) {
					return false;
				}
			}

			callback();
		}
	},

	/**
	 * Checks if an array of named modules are loaded and if so
	 * calls the passed callback method.
	 * @func moduleLoaded
	 * @memberof Core
	 * @param {Array} moduleName The array of module names to check for.
	 * @param {Function} callback The callback method to call if modules are loaded.
	 */
	'array, function': function (moduleNameArr, callback) {
		var moduleName,
			i;

		for (i = 0; i < moduleNameArr.length; i++) {
			moduleName = moduleNameArr[i];

			if (moduleName !== undefined) {
				moduleName = moduleName.replace(/ /g, '');

				var modules = moduleName.split(','),
					index;

				for (index = 0; index < modules.length; index++) {
					if (!Shared.modules[modules[index]]) {
						return false;
					}
				}
			}
		}

		callback();
	},

	/**
	 * Checks if a module is loaded and if so calls the passed
	 * success method, otherwise calls the failure method.
	 * @func moduleLoaded
	 * @memberof Core
	 * @param {String} moduleName The name of the module to check for.
	 * @param {Function} success The callback method to call if module is loaded.
	 * @param {Function} failure The callback method to call if module not loaded.
	 */
	'string, function, function': function (moduleName, success, failure) {
		if (moduleName !== undefined) {
			moduleName = moduleName.replace(/ /g, '');

			var modules = moduleName.split(','),
				index;

			for (index = 0; index < modules.length; index++) {
				if (!Shared.modules[modules[index]]) {
					failure();
					return false;
				}
			}

			success();
		}
	}
});

/**
 * Checks version against the string passed and if it matches (or partially matches)
 * then the callback is called.
 * @param {String} val The version to check against.
 * @param {Function} callback The callback to call if match is true.
 * @returns {Boolean}
 */
Core.prototype.version = function (val, callback) {
	if (val !== undefined) {
		if (Shared.version.indexOf(val) === 0) {
			if (callback) { callback(); }
			return true;
		}

		return false;
	}

	return Shared.version;
};

// Expose moduleLoaded() method to non-instantiated object ForerunnerDB
Core.moduleLoaded = Core.prototype.moduleLoaded;

// Expose version() method to non-instantiated object ForerunnerDB
Core.version = Core.prototype.version;

// Expose instances() method to non-instantiated object ForerunnerDB
Core.instances = Core.prototype.instances;

// Expose instantiatedCount() method to non-instantiated object ForerunnerDB
Core.instantiatedCount = Core.prototype.instantiatedCount;

// Provide public access to the Shared object
Core.shared = Shared;
Core.prototype.shared = Shared;

Shared.addModule('Core', Core);
Shared.mixin(Core.prototype, 'Mixin.Common');
Shared.mixin(Core.prototype, 'Mixin.Constants');

Db = require('./Db.js');
Metrics = require('./Metrics.js');

/**
 * Gets / sets the name of the instance. This is primarily used for
 * name-spacing persistent storage.
 * @param {String=} val The name of the instance to set.
 * @returns {*}
 */
Shared.synthesize(Core.prototype, 'name');

// Set a flag to determine environment
Core.prototype._isServer = false;

/**
 * Returns true if ForerunnerDB is running on a client browser.
 * @returns {boolean}
 */
Core.prototype.isClient = function () {
	return !this._isServer;
};

/**
 * Returns true if ForerunnerDB is running on a server.
 * @returns {boolean}
 */
Core.prototype.isServer = function () {
	return this._isServer;
};

/**
 * Checks if the database is running on a client (browser) or
 * a server (node.js).
 * @returns {Boolean} Returns true if running on a browser.
 */
Core.prototype.isClient = function () {
	return !this._isServer;
};

/**
 * Checks if the database is running on a client (browser) or
 * a server (node.js).
 * @returns {Boolean} Returns true if running on a server.
 */
Core.prototype.isServer = function () {
	return this._isServer;
};

/**
 * Added to provide an error message for users who have not seen
 * the new instantiation breaking change warning and try to get
 * a collection directly from the core instance.
 */
Core.prototype.collection = function () {
	throw("ForerunnerDB's instantiation has changed since version 1.3.36 to support multiple database instances. Please see the readme.md file for the minor change you have to make to get your project back up and running, or see the issue related to this change at https://github.com/Irrelon/ForerunnerDB/issues/44");
};

module.exports = Core;