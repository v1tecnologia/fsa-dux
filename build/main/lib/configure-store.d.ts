/// <reference types="redux-persist/types/types" />
import { Action, AnyAction, Reducer, Store, StoreEnhancer } from 'redux';
import { EnhancerOptions } from 'redux-devtools-extension';
import { PersistConfig } from 'redux-persist';
export declare const configureStore: <State = any>({ production, persistConfig, afterRehydrate, rootReducer, enhancers, devToolsEnhancerOptions, }: {
    rootReducer: Reducer<State, Action<any>>;
    production: boolean;
    persistConfig: PersistConfig<State, any, any, any>;
    afterRehydrate?: (store: Store<State, AnyAction>) => void;
    enhancers?: StoreEnhancer<any, any>[];
    devToolsEnhancerOptions?: EnhancerOptions;
}) => {
    store: Store<State, AnyAction>;
    persistor: import("redux-persist").Persistor;
};
export declare const hotModuleReplacement: ({ production, store, persistConfig, rootReducerPath, }: {
    production: boolean;
    store: Store<any, AnyAction>;
    persistConfig: PersistConfig<any, any, any, any>;
    rootReducerPath: string;
}) => void;
