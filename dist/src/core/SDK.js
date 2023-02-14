"use strict";
exports.__esModule = true;
exports.SDK = void 0;
var SDK = (function () {
    function SDK(augment) {
        if (augment === void 0) { augment = {}; }
        this.token = "";
        this.registeredPlugins = {};
        Object.assign(this, augment);
        for (var key in augment) {
            this.registeredPlugins[key] = augment[key];
            augment[key].register(this);
        }
    }
    SDK.prototype.setToken = function (token) {
        this.token = token;
    };
    SDK.prototype.getToken = function () {
        return this.token;
    };
    SDK.create = function (augment) {
        return new this(augment);
    };
    return SDK;
}());
exports.SDK = SDK;
exports["default"] = SDK;
//# sourceMappingURL=SDK.js.map