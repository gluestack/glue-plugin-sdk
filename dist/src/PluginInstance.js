"use strict";
exports.__esModule = true;
exports.PluginInstance = void 0;
var PluginInstance = (function () {
    function PluginInstance(app, callerPlugin, name, gluePluginStore, installationPath) {
        this.isOfTypeInstance = true;
        this.app = app;
        this.name = name;
        this.callerPlugin = callerPlugin;
        this.gluePluginStore = gluePluginStore;
        this.installationPath = installationPath;
    }
    PluginInstance.prototype.getInstallationPath = function () {
        throw new Error("Method not implemented.");
    };
    PluginInstance.prototype.init = function () {
    };
    PluginInstance.prototype.destroy = function () {
    };
    PluginInstance.prototype.getName = function () {
        return this.name;
    };
    PluginInstance.prototype.getCallerPlugin = function () {
        return this.callerPlugin;
    };
    return PluginInstance;
}());
exports.PluginInstance = PluginInstance;
//# sourceMappingURL=PluginInstance.js.map