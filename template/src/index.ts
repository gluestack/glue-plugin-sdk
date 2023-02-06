import { createSDK } from "@gluestack/sdk-creator";
import HelloWorldPlugin from "./plugins/HelloWorldPlugin";


const glueSDK = createSDK({"helloPlugin":new HelloWorldPlugin()})
export {glueSDK};