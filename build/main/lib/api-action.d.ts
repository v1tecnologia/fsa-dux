import queryString from 'query-string';
export declare const apiActionFactory: (options?: {
    baseUrl?: string;
    stringifyOptions?: queryString.StringifyOptions;
    defaultRequestOptions?: Pick<ApiActionParams<any, any, any>, "timeout" | "headers">;
    requestInterceptor?: (req: [RequestInfo, RequestInit, number, string?]) => Promise<[RequestInfo, RequestInit, number, string?]>;
    responseInterceptor?: (res: Response) => Promise<Response>;
    exceptionInterceptor?: (error: any) => Promise<any>;
}) => <Params = any, ReturnType_1 = any, ErrorType = any>({ url, method, params, onSuccess, onFailure, onAfter, onBefore, headers, timeout, }: ApiActionParams<Params, ReturnType_1, ErrorType>) => Promise<any>;
declare const fetchTimeout: (url: RequestInfo, options: RequestInit, timeout: number, error?: string) => Promise<Response>;
export declare type Method = 'GET' | 'DELETE' | 'HEAD' | 'OPTIONS' | 'POST' | 'PUT' | 'PATCH' | 'LINK' | 'UNLINK';
export interface ApiActionParams<Params = any, ReturnType = any, ErrorType = any> {
    url: string;
    method?: Method;
    params?: Params;
    onSuccess?: (data: ReturnType) => void;
    onFailure?: (error: ErrorType) => void;
    onBefore?: () => void;
    onAfter?: (isError: boolean) => void;
    headers?: {
        [key: string]: string;
    };
    timeout?: number;
}
export { fetchTimeout as fetch };
