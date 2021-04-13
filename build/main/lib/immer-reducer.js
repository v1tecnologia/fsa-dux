"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const immer_1 = __importDefault(require("immer"));
const typescript_fsa_reducers_1 = require("typescript-fsa-reducers");
exports.createReducer = (initialState) => {
    const reducer = typescript_fsa_reducers_1.reducerWithInitialState(initialState);
    reducer.immerCase = (actionCreator, 
    // TODO: this return typing is weird
    handler) => {
        return reducer.case(actionCreator, (state, payload) => immer_1.default(state, draft => handler(draft, payload)));
    };
    return reducer;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1tZXItcmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvaW1tZXItcmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtEQUF1QztBQUV2QyxxRUFBa0U7QUFjckQsUUFBQSxhQUFhLEdBQUcsQ0FBSSxZQUFlLEVBQUUsRUFBRTtJQUNsRCxNQUFNLE9BQU8sR0FBRyxpREFBdUIsQ0FBSSxZQUFZLENBQUMsQ0FBQztJQUN6RCxPQUFPLENBQUMsU0FBUyxHQUFHLENBQ2xCLGFBQXlDO0lBQ3pDLG9DQUFvQztJQUNwQyxPQUF1RCxFQUN2RCxFQUFFO1FBQ0YsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEtBQVEsRUFBRSxPQUFvQixFQUFFLEVBQUUsQ0FDcEUsZUFBTyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FDakQsQ0FBQztJQUNKLENBQUMsQ0FBQztJQUNGLE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUMsQ0FBQyJ9