export interface ISDKPlugin {
    sdk: SDK | undefined;
    register(sdk: SDK): void;
}
export declare class SDK {
    token: string;
    registeredPlugins: {
        [key: string]: ISDKPlugin;
    };
    setToken(token: string): void;
    getToken(): string;
    constructor(augment?: any);
    static create<T extends typeof SDK, U>(this: T, augment?: U): InstanceType<T> & U;
}
export default SDK;
