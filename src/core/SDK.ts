export interface ISDKPlugin {
  sdk: SDK | undefined;
  register(sdk: SDK): void;
}

export class SDK {
  registeredPlugins: {
    [key: string]: ISDKPlugin;
  } = {};

  constructor(augment: any = {}) {
    Object.assign(this, augment);
    for (const key in augment) {
      this.registeredPlugins[key] = augment[key];
      augment[key].register(this);
    }
  }

  getPluginInstance<T extends ISDKPlugin>(pluginName: string, plugin: new () => T): T {
    if (!this.registeredPlugins[pluginName]) {
      this.registeredPlugins[pluginName] = new plugin();
      this.registeredPlugins[pluginName].register(this);
    }
    return this.registeredPlugins[pluginName] as T;
  }

  static create<T extends typeof SDK, U>(this: T, augment?: U) {
    return new this(augment) as InstanceType<T> & U;
  }
}

export default SDK;
