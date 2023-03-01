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
        for (var key in this.registeredPlugins) {
            if (typeof this.registeredPlugins[key].boot === "function") {
                this.registeredPlugins[key].boot(this);
            }
        }
    }
    SDK.prototype.getPluginInstance = function (plugin) {
        var pluginName = "";
        var registeredPlugins = this.registeredPlugins;
        try {
            Object.keys(registeredPlugins).forEach(function (key) {
                if (registeredPlugins[key] instanceof plugin) {
                    pluginName = key;
                }
            });
        }
        catch (error) {
            return undefined;
        }
        if (pluginName === "") {
            return undefined;
        }
        return registeredPlugins[pluginName];
    };
    SDK.create = function (augment) {
        return new this(augment);
    };
    return SDK;
}());
exports.SDK = SDK;
//# sourceMappingURL=SDK.js.map