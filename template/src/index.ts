import { Auth } from './plugins/auth';
import { SDK } from "@gluestack/glue-plugin-sdk";

const sdk = SDK.create({
  auth: new Auth()
});

// Example:
// sdk.auth.login();
