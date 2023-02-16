"use strict";
exports.__esModule = true;
exports.SDK = void 0;
var SDK = (function () {
    function SDK(augment) {
        if (augment === void 0) { augment = {}; }
        this.registeredPlugins = {};
        Object.assign(this, augment);
        for (var key in augment) {
            this.registeredPlugins[key] = augment[key];
            augment[key].register(this);
        }
    }
    SDK.prototype.getPluginInstance = function (pluginName, plugin) {
        if (!this.registeredPlugins[pluginName]) {
            this.registeredPlugins[pluginName] = new plugin();
            this.registeredPlugins[pluginName].register(this);
        }
        return this.registeredPlugins[pluginName];
    };
    SDK.create = function (augment) {
        return new this(augment);
    };
    return SDK;
}());
exports.SDK = SDK;
exports["default"] = SDK;
//# sourceMappingURL=SDK.js.map