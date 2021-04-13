import { Action } from 'typescript-fsa';
export declare const requestReducerFactory: <ReduxApiError = any>(actionSufix?: {
    started?: string;
    done?: string;
    failed?: string;
}) => (state: {
    [key: string]: {
        loading?: boolean;
        error?: ReduxApiError;
    };
}, action: Action<any>) => {
    [key: string]: {
        loading?: boolean;
        error?: ReduxApiError;
    };
} | {
    [x: string]: {
        loading?: boolean;
        error?: import("immer").Draft<ReduxApiError>;
    };
};
