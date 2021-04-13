"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const react_1 = require("react");
exports.loadingAndErrorHookFactory = (reducerName) => {
    const useLoading = (labels) => {
        const flags = react_redux_1.useSelector((state) => state[reducerName]);
        return labels.map(t => flags[t].loading);
    };
    const useError = (labels) => {
        const flags = react_redux_1.useSelector((state) => state[reducerName]);
        const errors = labels.map(label => {
            const { error } = flags[label] || {};
            return error ? Object.assign({}, error) : undefined;
        });
        return errors;
    };
    const actionToLabel = (actions) => {
        return actions.map(a => a.async
            ? a.async.type
            : a.type);
    };
    const useLoadingAndError = (actions) => {
        const labels = actionToLabel(actions);
        const loadingArray = useLoading(labels);
        const loading = loadingArray.every(l => l);
        const errors = useError(labels);
        const hasError = errors.some(e => e);
        return {
            loading,
            loadingArray,
            errors,
            hasError,
        };
    };
    const useErrorCallback = (actions, callback) => {
        const labels = actionToLabel(actions);
        const errors = useError(labels);
        react_1.useEffect(() => {
            errors.forEach(error => {
                if (error === null || error === void 0 ? void 0 : error.message)
                    callback(error);
            });
        }, [errors, callback]);
    };
    return { useLoading, useError, useErrorCallback, useLoadingAndError };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2hvb2tzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsNkNBQTBDO0FBQzFDLGlDQUFrQztBQUVyQixRQUFBLDBCQUEwQixHQUFHLENBQUMsV0FBbUIsRUFBRSxFQUFFO0lBQ2hFLE1BQU0sVUFBVSxHQUFHLENBQUMsTUFBZ0IsRUFBYSxFQUFFO1FBQ2pELE1BQU0sS0FBSyxHQUFHLHlCQUFXLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQzlELE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQyxDQUFDLENBQUM7SUFFRixNQUFNLFFBQVEsR0FBRyxDQUNmLE1BQWdCLEVBQ2UsRUFBRTtRQUNqQyxNQUFNLEtBQUssR0FBRyx5QkFBVyxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUM5RCxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2hDLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3JDLE9BQU8sS0FBSyxDQUFDLENBQUMsbUJBQU0sS0FBSyxFQUFHLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDLENBQUM7SUFNRixNQUFNLGFBQWEsR0FBRyxDQUFDLE9BQW9CLEVBQUUsRUFBRTtRQUM3QyxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FDcEIsQ0FBa0IsQ0FBQyxLQUFLO1lBQ3ZCLENBQUMsQ0FBRSxDQUFrQixDQUFDLEtBQUssQ0FBQyxJQUFJO1lBQ2hDLENBQUMsQ0FBRSxDQUFtQixDQUFDLElBQUksQ0FDOUIsQ0FBQztJQUNKLENBQUMsQ0FBQztJQUVGLE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxPQUFvQixFQUFFLEVBQUU7UUFDbEQsTUFBTSxNQUFNLEdBQUcsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sWUFBWSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QyxNQUFNLE9BQU8sR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0MsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQyxPQUFPO1lBQ0wsT0FBTztZQUNQLFlBQVk7WUFDWixNQUFNO1lBQ04sUUFBUTtTQUNULENBQUM7SUFDSixDQUFDLENBQUM7SUFFRixNQUFNLGdCQUFnQixHQUFHLENBQ3ZCLE9BQW9CLEVBQ3BCLFFBQThCLEVBQ3hCLEVBQUU7UUFDUixNQUFNLE1BQU0sR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEMsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLGlCQUFTLENBQUMsR0FBRyxFQUFFO1lBQ2IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDckIsSUFBSSxLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsT0FBTztvQkFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdEMsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUN6QixDQUFDLENBQUM7SUFFRixPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBRSxDQUFDO0FBQ3hFLENBQUMsQ0FBQyJ9