import { ActionCreator } from 'typescript-fsa';
import { ThunkFunction } from 'typescript-fsa-redux-thunk';
export declare const loadingAndErrorHookFactory: (reducerName: string) => {
    useLoading: (labels: string[]) => boolean[];
    useError: <ReduxApiError = any>(labels: string[]) => ReduxApiError[];
    useErrorCallback: (actions: (ThunkFunction<any, any, any, any, any> | ActionCreator<any>)[], callback: (error: any) => void) => void;
    useLoadingAndError: (actions: (ThunkFunction<any, any, any, any, any> | ActionCreator<any>)[]) => {
        loading: boolean;
        loadingArray: boolean[];
        errors: any[];
        hasError: boolean;
    };
};
