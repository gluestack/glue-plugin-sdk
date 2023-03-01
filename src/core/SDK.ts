// This is SDKPlugin's Interface
export interface ISDKPlugin {
  sdk: SDK | undefined;
  register(sdk: SDK): void;
  boot?: (sdk: SDK) =>  void;
}

// This is SDKPlugin Creator
export class SDK {
  registeredPlugins: {
    [key: string]: ISDKPlugin;
  } = {};

  constructor(augment: any = {}) {
    Object.assign(this, augment);

    // registers all the plugins
    for (const key in augment) {
      this.registeredPlugins[key] = augment[key];
      augment[key].register(this);
    }

    // run boots from all the registered plugings
    for (const key in this.registeredPlugins) {
      if (typeof this.registeredPlugins[key].boot === "function") {
        this.registeredPlugins[key].boot(this);
      }
    }
  }

  getPluginInstance<T extends ISDKPlugin>(plugin: new () => T): T | undefined {
    let pluginName: string = "";
    const { registeredPlugins } = this;

    try {
      Object.keys(registeredPlugins).forEach((key) => {
        if (registeredPlugins[key] instanceof plugin) {
          pluginName = key;
        }
      });

    } catch (error) {
      return undefined;
    }

    if (pluginName === "") {
      return undefined;
    }

    return registeredPlugins[pluginName] as T;
  }

  static create<T extends typeof SDK, U>(this: T, augment?: U) {
    return new this(augment) as InstanceType<T> & U;
  }
}
