export interface ISDKPlugin {
  sdk: SDK | undefined;
  register(sdk: SDK): void;
}

export class SDK {
  token: string = "";
  registeredPlugins: {
    [key: string]: ISDKPlugin;
  } = {};

  setToken(token: string) {
    this.token = token;
  }

  getToken() {
    return this.token;
  }

  constructor(augment: any = {}) {
    Object.assign(this, augment);
    for (const key in augment) {
      this.registeredPlugins[key] = augment[key];
      augment[key].register(this);
    }
  }

  static create<T extends typeof SDK, U>(this: T, augment?: U) {
    return new this(augment) as InstanceType<T> & U;
  }
}

export default SDK;
