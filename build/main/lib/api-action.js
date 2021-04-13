"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cross_fetch_1 = __importDefault(require("cross-fetch"));
const query_string_1 = __importDefault(require("query-string"));
exports.apiActionFactory = (options) => {
    const { baseUrl, requestInterceptor, responseInterceptor, exceptionInterceptor, defaultRequestOptions, stringifyOptions = { skipNull: true, arrayFormat: 'comma' }, } = options;
    return async ({ url, method = 'GET', params, onSuccess, onFailure, onAfter, onBefore, headers, timeout = (defaultRequestOptions === null || defaultRequestOptions === void 0 ? void 0 : defaultRequestOptions.timeout) || 10000, }) => {
        if (onBefore)
            onBefore();
        const isGet = method === 'GET';
        try {
            const combinedUrl = baseUrl ? baseUrl + url : url;
            const request = [
                isGet
                    ? query_string_1.default.stringifyUrl({
                        url: combinedUrl,
                        query: params,
                    }, stringifyOptions)
                    : combinedUrl,
                {
                    body: !isGet && params && typeof params === 'object'
                        ? JSON.stringify(params)
                        : undefined,
                    headers: Object.assign(Object.assign({}, defaultRequestOptions === null || defaultRequestOptions === void 0 ? void 0 : defaultRequestOptions.headers), headers),
                    method,
                },
                timeout,
            ];
            const interceptedRequest = requestInterceptor
                ? await requestInterceptor(request)
                : request;
            const fetchResponse = await fetchTimeout(...interceptedRequest);
            const interceptedResponse = responseInterceptor
                ? await responseInterceptor(fetchResponse)
                : fetchResponse;
            const data = await interceptedResponse.json();
            if (onSuccess)
                onSuccess(data);
            if (onAfter)
                onAfter(false);
            return data;
        }
        catch (e) {
            const interceptedError = exceptionInterceptor
                ? await exceptionInterceptor(e)
                : e;
            if (onFailure)
                onFailure(interceptedError);
            if (onAfter)
                onAfter(true);
            // this throw is captured by the thunk
            throw interceptedError;
        }
    };
};
const timeoutPromise = (promise, timeout, error) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(error);
        }, timeout);
        promise.then(resolve, reject);
    });
};
const fetchTimeout = (url, options, timeout, error = 'TIMEOUT') => {
    return timeoutPromise(cross_fetch_1.default(url, options), timeout, error);
};
exports.fetch = fetchTimeout;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLWFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvYXBpLWFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhEQUFnQztBQUNoQyxnRUFBdUM7QUFNMUIsUUFBQSxnQkFBZ0IsR0FBRyxDQUFDLE9BVWhDLEVBQUUsRUFBRTtJQUNILE1BQU0sRUFDSixPQUFPLEVBQ1Asa0JBQWtCLEVBQ2xCLG1CQUFtQixFQUNuQixvQkFBb0IsRUFDcEIscUJBQXFCLEVBQ3JCLGdCQUFnQixHQUFHLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLEdBQzVELEdBQUcsT0FBTyxDQUFDO0lBQ1osT0FBTyxLQUFLLEVBQW1ELEVBQzdELEdBQUcsRUFDSCxNQUFNLEdBQUcsS0FBSyxFQUNkLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNULE9BQU8sRUFDUCxRQUFRLEVBQ1IsT0FBTyxFQUNQLE9BQU8sR0FBRyxDQUFBLHFCQUFxQixhQUFyQixxQkFBcUIsdUJBQXJCLHFCQUFxQixDQUFFLE9BQU8sS0FBSSxLQUFLLEdBQ0YsRUFBRSxFQUFFO1FBQ25ELElBQUksUUFBUTtZQUFFLFFBQVEsRUFBRSxDQUFDO1FBQ3pCLE1BQU0sS0FBSyxHQUFHLE1BQU0sS0FBSyxLQUFLLENBQUM7UUFDL0IsSUFBSTtZQUNGLE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQ2xELE1BQU0sT0FBTyxHQUFnQjtnQkFDM0IsS0FBSztvQkFDSCxDQUFDLENBQUMsc0JBQVcsQ0FBQyxZQUFZLENBQ3RCO3dCQUNFLEdBQUcsRUFBRSxXQUFXO3dCQUNoQixLQUFLLEVBQUUsTUFBYTtxQkFDckIsRUFDRCxnQkFBZ0IsQ0FDakI7b0JBQ0gsQ0FBQyxDQUFDLFdBQVc7Z0JBQ2Y7b0JBQ0UsSUFBSSxFQUNGLENBQUMsS0FBSyxJQUFJLE1BQU0sSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRO3dCQUM1QyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7d0JBQ3hCLENBQUMsQ0FBQyxTQUFTO29CQUNmLE9BQU8sa0NBQU8scUJBQXFCLGFBQXJCLHFCQUFxQix1QkFBckIscUJBQXFCLENBQUUsT0FBTyxHQUFLLE9BQU8sQ0FBRTtvQkFDMUQsTUFBTTtpQkFDUDtnQkFDRCxPQUFPO2FBQ1IsQ0FBQztZQUNGLE1BQU0sa0JBQWtCLEdBQUcsa0JBQWtCO2dCQUMzQyxDQUFDLENBQUMsTUFBTSxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7Z0JBQ25DLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDWixNQUFNLGFBQWEsR0FBRyxNQUFNLFlBQVksQ0FBQyxHQUFHLGtCQUFrQixDQUFDLENBQUM7WUFDaEUsTUFBTSxtQkFBbUIsR0FBRyxtQkFBbUI7Z0JBQzdDLENBQUMsQ0FBQyxNQUFNLG1CQUFtQixDQUFDLGFBQWEsQ0FBQztnQkFDMUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQztZQUNsQixNQUFNLElBQUksR0FBRyxNQUFNLG1CQUFtQixDQUFDLElBQUksRUFBRSxDQUFDO1lBQzlDLElBQUksU0FBUztnQkFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0IsSUFBSSxPQUFPO2dCQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM1QixPQUFPLElBQUksQ0FBQztTQUNiO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixNQUFNLGdCQUFnQixHQUFHLG9CQUFvQjtnQkFDM0MsQ0FBQyxDQUFDLE1BQU0sb0JBQW9CLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ04sSUFBSSxTQUFTO2dCQUFFLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzNDLElBQUksT0FBTztnQkFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0Isc0NBQXNDO1lBQ3RDLE1BQU0sZ0JBQWdCLENBQUM7U0FDeEI7SUFDSCxDQUFDLENBQUM7QUFDSixDQUFDLENBQUM7QUFDRixNQUFNLGNBQWMsR0FBRyxDQUNyQixPQUEwQixFQUMxQixPQUFlLEVBQ2YsS0FBYSxFQUNNLEVBQUU7SUFDckIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtRQUNyQyxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hCLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNaLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBRUYsTUFBTSxZQUFZLEdBQUcsQ0FDbkIsR0FBZ0IsRUFDaEIsT0FBb0IsRUFDcEIsT0FBZSxFQUNmLFFBQWdCLFNBQVMsRUFDekIsRUFBRTtJQUNGLE9BQU8sY0FBYyxDQUFDLHFCQUFLLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztBQUM3RCxDQUFDLENBQUM7QUE2QnVCLDZCQUFLIn0=