import { Auth } from './plugins/auth';
import { SDK } from "@gluestack/glue-plugin-sdk";

export const sdk = SDK.create({
  auth: new Auth()
});
