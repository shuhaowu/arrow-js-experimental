export declare class IndexAccessProxyHandler<T extends object = any> implements ProxyHandler<T> {
    get(target: any, key: string, receiver: any): any;
    set(target: any, key: string, value: any, receiver: any): boolean;
}
