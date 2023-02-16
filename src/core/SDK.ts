// This is SDKPlugin's Interface
export interface ISDKPlugin {
  sdk: SDK | undefined;
  register(sdk: SDK): void;
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
    for (const key in augment) {
      if (typeof augment[key].boot === "function") {
        augment[key].boot(this);
      }
    }
  }

  getPluginInstance<T extends ISDKPlugin>(plugin: new () => T): T | undefined {
    let pluginName: string = "";

    try {
      Object.keys(this.registeredPlugins).forEach((key) => {
        if (this.registeredPlugins[key] instanceof plugin) {
          pluginName = key;
        }
      });
    } catch (error: any) {
      return undefined;
    }

    if (pluginName === "") {
      return undefined;
    }

    return (this.registeredPlugins[pluginName] as unknown) as T;
  }

  static create<T extends typeof SDK, U>(this: T, augment?: U) {
    return new this(augment) as InstanceType<T> & U;
  }
}