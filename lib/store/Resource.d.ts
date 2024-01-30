import { Store, StoreOptions } from './Store';
export type ResourceFetcher<StoreType = unknown> = () => Promise<StoreType>;
export interface ResourceOptions<StoreType> extends StoreOptions<StoreType> {
    manualControl?: boolean;
}
export declare class Resource<StoreType> extends Store<StoreType> {
    #private;
    constructor(defaultValue: StoreType, fetcher: ResourceFetcher<StoreType>, options?: ResourceOptions<StoreType>);
    get isPending(): Store<boolean, import("./Store").StoreEntry<boolean>>;
    /**
     * Calls fetcher again and sets isPending to true.
     */
    refetch(): void;
}
