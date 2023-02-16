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
        for (var key in augment) {
            if (typeof augment[key].boot === "function") {
                augment[key].boot(this);
            }
        }
    }
    SDK.prototype.getPluginInstance = function (plugin) {
        var _this = this;
        var pluginName = "";
        try {
            Object.keys(this.registeredPlugins).forEach(function (key) {
                if (_this.registeredPlugins[key] instanceof plugin) {
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
        return this.registeredPlugins[pluginName];
    };
    SDK.create = function (augment) {
        return new this(augment);
    };
    return SDK;
}());
exports.SDK = SDK;
//# sourceMappingURL=SDK.js.map