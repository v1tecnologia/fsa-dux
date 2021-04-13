"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const immer_1 = __importDefault(require("immer"));
exports.requestReducerFactory = (actionSufix) => {
    const { started, done, failed } = actionSufix || {
        started: 'STARTED',
        done: 'DONE',
        failed: 'FAILED',
    };
    const regex = new RegExp(`(.*)_(${started}|${done}|${failed})`);
    return (state = {}, action) => immer_1.default(state, draft => {
        var _a;
        const { type } = action;
        const matches = regex.exec(type);
        if (!matches)
            return state;
        const [, requestName, requestState] = matches;
        if (requestState === started)
            draft[requestName] = { loading: true };
        else if (requestState === failed)
            draft[requestName] = { loading: false, error: (_a = action.payload) === null || _a === void 0 ? void 0 : _a.error };
        else if (draft[requestName])
            delete draft[requestName];
        return draft;
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC1yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9yZXF1ZXN0LXJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrREFBNEI7QUFHZixRQUFBLHFCQUFxQixHQUFHLENBQXNCLFdBSTFELEVBQUUsRUFBRTtJQUNILE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHLFdBQVcsSUFBSTtRQUMvQyxPQUFPLEVBQUUsU0FBUztRQUNsQixJQUFJLEVBQUUsTUFBTTtRQUNaLE1BQU0sRUFBRSxRQUFRO0tBQ2pCLENBQUM7SUFDRixNQUFNLEtBQUssR0FBRyxJQUFJLE1BQU0sQ0FBQyxTQUFTLE9BQU8sSUFBSSxJQUFJLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztJQUVoRSxPQUFPLENBQ0wsUUFFSSxFQUFFLEVBQ04sTUFBbUIsRUFDbkIsRUFBRSxDQUNGLGVBQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUU7O1FBQ3JCLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxNQUFNLENBQUM7UUFDeEIsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVqQyxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU8sS0FBSyxDQUFDO1FBRTNCLE1BQU0sQ0FBQyxFQUFFLFdBQVcsRUFBRSxZQUFZLENBQUMsR0FBRyxPQUFPLENBQUM7UUFDOUMsSUFBSSxZQUFZLEtBQUssT0FBTztZQUFFLEtBQUssQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQzthQUNoRSxJQUFJLFlBQVksS0FBSyxNQUFNO1lBQzlCLEtBQUssQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxRQUFFLE1BQU0sQ0FBQyxPQUFPLDBDQUFFLEtBQUssRUFBRSxDQUFDO2FBQ25FLElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQztZQUFFLE9BQU8sS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMifQ==