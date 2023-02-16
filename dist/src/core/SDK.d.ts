export interface ISDKPlugin {
    sdk: SDK | undefined;
    register(sdk: SDK): void;
}
export declare class SDK {
    registeredPlugins: {
        [key: string]: ISDKPlugin;
    };
    constructor(augment?: any);
    getPluginInstance<T extends ISDKPlugin>(plugin: new () => T): T | undefined;
    static create<T extends typeof SDK, U>(this: T, augment?: U): InstanceType<T> & U;
}
