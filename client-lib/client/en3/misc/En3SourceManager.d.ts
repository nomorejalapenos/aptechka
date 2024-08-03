import { SourceManagerParameters, SourceManager } from '../../source';
import { Store } from '../../store';
import { EventDispatcher, Loader } from 'three';

export interface En3SourceManagerLoader<T> {
    load: Loader<T>['load'];
}
export interface En3SourceManagerFullParameters<T> extends SourceManagerParameters {
    keepSourceParameters?: boolean;
    loader: En3SourceManagerLoader<T>;
    lazy?: boolean;
    consumer: EventDispatcher;
}
export type En3SourceManagerParameters<T> = Omit<En3SourceManagerFullParameters<T>, 'loader' | 'element' | 'consumer'>;
export type En3SourceManagerLoadingState = 'start' | 'complete' | 'error' | undefined;
export declare class En3SourceManager<T> extends SourceManager {
    #private;
    constructor(parameters: En3SourceManagerFullParameters<T>);
    /**
     * Resource store.
     */
    get data(): Store<T | null | undefined, keyof import('../../store').StoreManagers>;
    /**
     * Loading store.
     */
    get loading(): Store<En3SourceManagerLoadingState, keyof import('../../store').StoreManagers>;
    /**
     * Calling this method will start loading the resource.
     */
    lazyLoad(): void;
    processData?(data: T): T;
}
