import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'typescript-fsa';
import { ApiActionParams } from './api-action';
export interface ApiParams<ParamType = any, ReturnType = any, ReduxApiError = any> {
    onSuccess?: (data: ReturnType) => void;
    onFailure?: (error: ReduxApiError) => void;
    onBefore?: () => void;
    onAfter?: (isError: boolean) => void;
    params: ParamType;
}
export declare type GenericDispatch = ThunkDispatch<any, any, AnyAction>;
export declare const actionCreators: <State = any, ReduxApiError = any>(apiAction: <Params = any, ReturnType_1 = any, ErrorType = any>({ url, method, params, onSuccess, onFailure, onAfter, onBefore, headers, timeout, }: ApiActionParams<Params, ReturnType_1, ErrorType>) => Promise<any>, namespace: string) => {
    create: import("typescript-fsa").ActionCreatorFactory;
    createAsync: <P, R, E = any>(type: string, worker: import("typescript-fsa-redux-thunk").AsyncWorker<P, import("typescript-fsa-redux-thunk").ThunkReturnType<R>, State, any>, commonMeta?: {
        [key: string]: any;
    }) => import("typescript-fsa-redux-thunk").ThunkFunction<State, P, import("typescript-fsa-redux-thunk").ThunkReturnType<R>, E, any>;
    createApi: <Params_1 = void, Return = void, Error_1 = ReduxApiError>(type: string, configFunc: (config: {
        params: Params_1;
        dispatch: GenericDispatch;
        getState: () => State;
    }) => ApiActionParams<any, Return, Error_1>) => import("typescript-fsa-redux-thunk").ThunkFunction<State, ApiParams<Params_1, Return, Error_1>, import("typescript-fsa-redux-thunk").ThunkReturnType<Return>, Error_1, any>;
};
