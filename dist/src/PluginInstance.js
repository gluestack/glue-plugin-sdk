"use strict";
exports.__esModule = true;
exports.PluginInstance = void 0;
var PluginInstanceContainerController_1 = require("./PluginInstanceContainerController");
var PluginInstance = (function () {
    function PluginInstance(app, callerPlugin, name, gluePluginStore, installationPath) {
        this.isOfTypeInstance = true;
        this.app = app;
        this.name = name;
        this.callerPlugin = callerPlugin;
        this.gluePluginStore = gluePluginStore;
        this.installationPath = installationPath;
        this.containerController = new PluginInstanceContainerController_1.PluginInstanceContainerController(app, this);
    }
    PluginInstance.prototype.getInstallationPath = function () {
        return this.installationPath;
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
    PluginInstance.prototype.getContainerController = function () {
        return this.containerController;
    };
    return PluginInstance;
}());
exports.PluginInstance = PluginInstance;
//# sourceMappingURL=PluginInstance.js.map