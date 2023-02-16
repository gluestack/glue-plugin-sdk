import { PluginInstance } from "./PluginInstance";
import IApp from "@gluestack/framework/types/app/interface/IApp";
import IContainerController from "@gluestack/framework/types/plugin/interface/IContainerController";
export declare class PluginInstanceContainerController implements IContainerController {
    app: IApp;
    status: "up" | "down";
    portNumber: number;
    containerId: string;
    callerInstance: PluginInstance;
    appPorts: number[];
    constructor(app: IApp, callerInstance: PluginInstance);
    getCallerInstance(): PluginInstance;
    installScript(): void;
    runScript(): void;
    getEnv(): {};
    getDockerJson(): Promise<{}>;
    getStatus(): "up" | "down";
    getPortNumber(returnDefault?: boolean): Promise<number>;
    getContainerId(): string;
    setStatus(status: "up" | "down"): "up" | "down";
    setPortNumber(portNumber: number): number;
    setContainerId(containerId: string): void;
    getConfig(): any;
    up(): Promise<void>;
    down(): Promise<void>;
    watch(): Promise<string[]>;
    build(): Promise<void>;
}
