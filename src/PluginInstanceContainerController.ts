import { PluginInstance } from "./PluginInstance";
import IApp from "@gluestack/framework/types/app/interface/IApp";
import IContainerController from "@gluestack/framework/types/plugin/interface/IContainerController";

export class PluginInstanceContainerController implements IContainerController {
  app: IApp;
  status: "up" | "down" = "down";
  portNumber: number;
  containerId: string;
  callerInstance: PluginInstance;
  appPorts: number[] = [];

  constructor(app: IApp, callerInstance: PluginInstance) {
    this.app = app;
    this.callerInstance = callerInstance;
    this.setStatus(this.callerInstance.gluePluginStore.get("status"));
    this.setPortNumber(this.callerInstance.gluePluginStore.get("port_number"));
    this.setContainerId(
      this.callerInstance.gluePluginStore.get("container_id"),
    );
  }

  getCallerInstance(): PluginInstance {
    return this.callerInstance;
  }

  installScript() {
    // do nothing
  }

  runScript() {
    // do nothing
  }

  getEnv() {
    return {}
  }

  async getDockerJson() {
    return {};
  }

  getStatus(): "up" | "down" {
    return this.status;
  }

  // @ts-ignore
  async getPortNumber(returnDefault?: boolean) {
    return 10022;
  }

  getContainerId(): string {
    return this.containerId;
  }

  setStatus(status: "up" | "down") {
    this.callerInstance.gluePluginStore.set("status", status || "down");
    this.status = status || "down";

    return this.status;
  }

  setPortNumber(portNumber: number) {
    this.callerInstance.gluePluginStore.set("port_number", portNumber || null);
    this.portNumber = portNumber || null

    return this.portNumber;
  }

  setContainerId(containerId: string) {
    // do nothing
  }

  getConfig(): any { }

  async up() {}

  async down() {}

  async watch(): Promise<string[]> {
    return [];
  }

  async build() {}
}
