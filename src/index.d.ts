declare module '@gluestack/glue-plugin-sdk' {
  export interface ISDKPlugin {
    sdk: SDK | undefined;
    register(sdk: SDK): void;
  }

  export class SDK {
    token: string;

    registeredPlugins: {
      [key: string]: ISDKPlugin;
    };

    constructor(augment?: any);

    getToken(): string;
    setToken(token: string): void;

    static create<T extends typeof SDK, U>(this: T, augment?: U): InstanceType<T> & U;
  }

  export default SDK;
}
