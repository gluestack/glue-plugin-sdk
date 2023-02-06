import { IPlugin, SDKController } from "@gluestack/sdk-creator";

export default class HelloWorldPlugin implements IPlugin {
    _SDKController: SDKController | undefined;
    boot(_SDKController: SDKController): void {
        console.log("Hello from HelloWorldPlugin class")
    }

}

