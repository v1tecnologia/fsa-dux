import { Draft } from 'immer';
import { ActionCreator } from 'typescript-fsa';
declare module 'typescript-fsa-reducers' {
    interface ReducerBuilder<InS extends OutS, OutS = InS> {
        immerCase: <PayloadType>(actionCreator: ActionCreator<PayloadType>, handler: (draft: Draft<InS>, payload: PayloadType) => void) => ReducerBuilder<OutS>;
    }
}
export declare const createReducer: <S>(initialState: S) => import("typescript-fsa-reducers").ReducerBuilder<S, S>;
