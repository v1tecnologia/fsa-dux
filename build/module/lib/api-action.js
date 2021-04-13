import fetch from 'cross-fetch';
import queryString from 'query-string';
export const apiActionFactory = (options) => {
    const { baseUrl, requestInterceptor, responseInterceptor, exceptionInterceptor, defaultRequestOptions, stringifyOptions = { skipNull: true, arrayFormat: 'comma' }, } = options;
    return async ({ url, method = 'GET', params, onSuccess, onFailure, onAfter, onBefore, headers, timeout = defaultRequestOptions?.timeout || 10000, }) => {
        if (onBefore)
            onBefore();
        const isGet = method === 'GET';
        try {
            const combinedUrl = baseUrl ? baseUrl + url : url;
            const request = [
                isGet
                    ? queryString.stringifyUrl({
                        url: combinedUrl,
                        query: params,
                    }, stringifyOptions)
                    : combinedUrl,
                {
                    body: !isGet && params && typeof params === 'object'
                        ? JSON.stringify(params)
                        : undefined,
                    headers: { ...defaultRequestOptions?.headers, ...headers },
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
    return timeoutPromise(fetch(url, options), timeout, error);
};
export { fetchTimeout as fetch };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLWFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvYXBpLWFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEtBQUssTUFBTSxhQUFhLENBQUM7QUFDaEMsT0FBTyxXQUFXLE1BQU0sY0FBYyxDQUFDO0FBTXZDLE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFHLENBQUMsT0FVaEMsRUFBRSxFQUFFO0lBQ0gsTUFBTSxFQUNKLE9BQU8sRUFDUCxrQkFBa0IsRUFDbEIsbUJBQW1CLEVBQ25CLG9CQUFvQixFQUNwQixxQkFBcUIsRUFDckIsZ0JBQWdCLEdBQUcsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsR0FDNUQsR0FBRyxPQUFPLENBQUM7SUFDWixPQUFPLEtBQUssRUFBbUQsRUFDN0QsR0FBRyxFQUNILE1BQU0sR0FBRyxLQUFLLEVBQ2QsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1QsT0FBTyxFQUNQLFFBQVEsRUFDUixPQUFPLEVBQ1AsT0FBTyxHQUFHLHFCQUFxQixFQUFFLE9BQU8sSUFBSSxLQUFLLEdBQ0YsRUFBRSxFQUFFO1FBQ25ELElBQUksUUFBUTtZQUFFLFFBQVEsRUFBRSxDQUFDO1FBQ3pCLE1BQU0sS0FBSyxHQUFHLE1BQU0sS0FBSyxLQUFLLENBQUM7UUFDL0IsSUFBSTtZQUNGLE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQ2xELE1BQU0sT0FBTyxHQUFnQjtnQkFDM0IsS0FBSztvQkFDSCxDQUFDLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FDdEI7d0JBQ0UsR0FBRyxFQUFFLFdBQVc7d0JBQ2hCLEtBQUssRUFBRSxNQUFhO3FCQUNyQixFQUNELGdCQUFnQixDQUNqQjtvQkFDSCxDQUFDLENBQUMsV0FBVztnQkFDZjtvQkFDRSxJQUFJLEVBQ0YsQ0FBQyxLQUFLLElBQUksTUFBTSxJQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVE7d0JBQzVDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQzt3QkFDeEIsQ0FBQyxDQUFDLFNBQVM7b0JBQ2YsT0FBTyxFQUFFLEVBQUUsR0FBRyxxQkFBcUIsRUFBRSxPQUFPLEVBQUUsR0FBRyxPQUFPLEVBQUU7b0JBQzFELE1BQU07aUJBQ1A7Z0JBQ0QsT0FBTzthQUNSLENBQUM7WUFDRixNQUFNLGtCQUFrQixHQUFHLGtCQUFrQjtnQkFDM0MsQ0FBQyxDQUFDLE1BQU0sa0JBQWtCLENBQUMsT0FBTyxDQUFDO2dCQUNuQyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQ1osTUFBTSxhQUFhLEdBQUcsTUFBTSxZQUFZLENBQUMsR0FBRyxrQkFBa0IsQ0FBQyxDQUFDO1lBQ2hFLE1BQU0sbUJBQW1CLEdBQUcsbUJBQW1CO2dCQUM3QyxDQUFDLENBQUMsTUFBTSxtQkFBbUIsQ0FBQyxhQUFhLENBQUM7Z0JBQzFDLENBQUMsQ0FBQyxhQUFhLENBQUM7WUFDbEIsTUFBTSxJQUFJLEdBQUcsTUFBTSxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM5QyxJQUFJLFNBQVM7Z0JBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9CLElBQUksT0FBTztnQkFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDNUIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsTUFBTSxnQkFBZ0IsR0FBRyxvQkFBb0I7Z0JBQzNDLENBQUMsQ0FBQyxNQUFNLG9CQUFvQixDQUFDLENBQUMsQ0FBQztnQkFDL0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNOLElBQUksU0FBUztnQkFBRSxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUMzQyxJQUFJLE9BQU87Z0JBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNCLHNDQUFzQztZQUN0QyxNQUFNLGdCQUFnQixDQUFDO1NBQ3hCO0lBQ0gsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBQ0YsTUFBTSxjQUFjLEdBQUcsQ0FDckIsT0FBMEIsRUFDMUIsT0FBZSxFQUNmLEtBQWEsRUFDTSxFQUFFO0lBQ3JCLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7UUFDckMsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQixDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDWixPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUVGLE1BQU0sWUFBWSxHQUFHLENBQ25CLEdBQWdCLEVBQ2hCLE9BQW9CLEVBQ3BCLE9BQWUsRUFDZixRQUFnQixTQUFTLEVBQ3pCLEVBQUU7SUFDRixPQUFPLGNBQWMsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztBQUM3RCxDQUFDLENBQUM7QUE2QkYsT0FBTyxFQUFFLFlBQVksSUFBSSxLQUFLLEVBQUUsQ0FBQyJ9