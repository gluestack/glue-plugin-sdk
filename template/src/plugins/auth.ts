import { SDK, SDKPlugin } from "@gluestack/glue-plugin-sdk";

export class Auth implements SDKPlugin {
	sdk: SDK | undefined;

	register(sdk: SDK) {
		this.sdk = sdk;
	}

	login() {
		this.sdk?.setToken("21312321");
	}
}
