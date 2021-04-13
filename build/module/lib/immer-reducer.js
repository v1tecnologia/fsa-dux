import produce from 'immer';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
export const createReducer = (initialState) => {
    const reducer = reducerWithInitialState(initialState);
    reducer.immerCase = (actionCreator, 
    // TODO: this return typing is weird
    handler) => {
        return reducer.case(actionCreator, (state, payload) => produce(state, draft => handler(draft, payload)));
    };
    return reducer;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1tZXItcmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvaW1tZXItcmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLE9BQWtCLE1BQU0sT0FBTyxDQUFDO0FBRXZDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBY2xFLE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRyxDQUFJLFlBQWUsRUFBRSxFQUFFO0lBQ2xELE1BQU0sT0FBTyxHQUFHLHVCQUF1QixDQUFJLFlBQVksQ0FBQyxDQUFDO0lBQ3pELE9BQU8sQ0FBQyxTQUFTLEdBQUcsQ0FDbEIsYUFBeUM7SUFDekMsb0NBQW9DO0lBQ3BDLE9BQXVELEVBQ3ZELEVBQUU7UUFDRixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBUSxFQUFFLE9BQW9CLEVBQUUsRUFBRSxDQUNwRSxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUNqRCxDQUFDO0lBQ0osQ0FBQyxDQUFDO0lBQ0YsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQyxDQUFDIn0=