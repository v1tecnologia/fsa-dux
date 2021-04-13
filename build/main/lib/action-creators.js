"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typescript_fsa_1 = __importDefault(require("typescript-fsa"));
const typescript_fsa_redux_thunk_1 = __importDefault(require("typescript-fsa-redux-thunk"));
exports.actionCreators = (apiAction, namespace) => {
    const create = typescript_fsa_1.default(namespace);
    const createAsync = typescript_fsa_redux_thunk_1.default(create);
    const createApi = (type, configFunc) => createAsync(type, async ({ params, onFailure: componentOnFailure, onSuccess: componentOnSuccess, onAfter: componentOnAfter, onBefore: componentOnBefore, }, dispatch, getState) => {
        const _a = configFunc({ params, dispatch, getState }), { onSuccess: actionOnSuccess, onFailure: actionOnFailure, onAfter: actionOnAfter, onBefore: actionOnBefore, params: configParams } = _a, rest = __rest(_a, ["onSuccess", "onFailure", "onAfter", "onBefore", "params"]);
        return apiAction(Object.assign(Object.assign({ params: configParams || params }, rest), { onSuccess: data => {
                if (componentOnSuccess)
                    componentOnSuccess(data);
                if (actionOnSuccess)
                    actionOnSuccess(data);
            }, onFailure: error => {
                if (componentOnFailure)
                    componentOnFailure(error);
                if (actionOnFailure)
                    actionOnFailure(error);
            }, onAfter: isError => {
                if (componentOnAfter)
                    componentOnAfter(isError);
                if (actionOnAfter)
                    actionOnAfter(isError);
            }, onBefore: () => {
                if (componentOnBefore)
                    componentOnBefore();
                if (actionOnBefore)
                    actionOnBefore();
            } }));
    });
    return {
        create,
        createAsync,
        createApi,
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLWNyZWF0b3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9hY3Rpb24tY3JlYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLG9FQUE4RDtBQUM5RCw0RkFBc0Q7QUFpQnpDLFFBQUEsY0FBYyxHQUFHLENBQzVCLFNBQThDLEVBQzlDLFNBQWlCLEVBQ2pCLEVBQUU7SUFDRixNQUFNLE1BQU0sR0FBRyx3QkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM1QyxNQUFNLFdBQVcsR0FBRyxvQ0FBWSxDQUFRLE1BQU0sQ0FBQyxDQUFDO0lBQ2hELE1BQU0sU0FBUyxHQUFHLENBQ2hCLElBQVksRUFDWixVQU15QyxFQUN6QyxFQUFFLENBQ0YsV0FBVyxDQUNULElBQUksRUFDSixLQUFLLEVBQ0gsRUFDRSxNQUFNLEVBQ04sU0FBUyxFQUFFLGtCQUFrQixFQUM3QixTQUFTLEVBQUUsa0JBQWtCLEVBQzdCLE9BQU8sRUFBRSxnQkFBZ0IsRUFDekIsUUFBUSxFQUFFLGlCQUFpQixHQUM1QixFQUNELFFBQVEsRUFDUixRQUFRLEVBQ1IsRUFBRTtRQUNGLE1BQU0sK0NBT3dDLEVBUHhDLEVBQ0osU0FBUyxFQUFFLGVBQWUsRUFDMUIsU0FBUyxFQUFFLGVBQWUsRUFDMUIsT0FBTyxFQUFFLGFBQWEsRUFDdEIsUUFBUSxFQUFFLGNBQWMsRUFDeEIsTUFBTSxFQUFFLFlBQVksT0FFd0IsRUFENUMsOEVBQzRDLENBQUM7UUFFL0MsT0FBTyxTQUFTLCtCQUNkLE1BQU0sRUFBRSxZQUFZLElBQUksTUFBTSxJQUMzQixJQUFJLEtBQ1AsU0FBUyxFQUFFLElBQUksQ0FBQyxFQUFFO2dCQUNoQixJQUFJLGtCQUFrQjtvQkFBRSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDakQsSUFBSSxlQUFlO29CQUFFLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3QyxDQUFDLEVBQ0QsU0FBUyxFQUFFLEtBQUssQ0FBQyxFQUFFO2dCQUNqQixJQUFJLGtCQUFrQjtvQkFBRSxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDbEQsSUFBSSxlQUFlO29CQUFFLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM5QyxDQUFDLEVBQ0QsT0FBTyxFQUFFLE9BQU8sQ0FBQyxFQUFFO2dCQUNqQixJQUFJLGdCQUFnQjtvQkFBRSxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDaEQsSUFBSSxhQUFhO29CQUFFLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM1QyxDQUFDLEVBQ0QsUUFBUSxFQUFFLEdBQUcsRUFBRTtnQkFDYixJQUFJLGlCQUFpQjtvQkFBRSxpQkFBaUIsRUFBRSxDQUFDO2dCQUMzQyxJQUFJLGNBQWM7b0JBQUUsY0FBYyxFQUFFLENBQUM7WUFDdkMsQ0FBQyxJQUNELENBQUM7SUFDTCxDQUFDLENBQ0YsQ0FBQztJQUVKLE9BQU87UUFDTCxNQUFNO1FBQ04sV0FBVztRQUNYLFNBQVM7S0FDVixDQUFDO0FBQ0osQ0FBQyxDQUFDIn0=