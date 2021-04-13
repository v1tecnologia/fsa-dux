import produce from 'immer';
export const requestReducerFactory = (actionSufix) => {
    const { started, done, failed } = actionSufix || {
        started: 'STARTED',
        done: 'DONE',
        failed: 'FAILED',
    };
    const regex = new RegExp(`(.*)_(${started}|${done}|${failed})`);
    return (state = {}, action) => produce(state, draft => {
        const { type } = action;
        const matches = regex.exec(type);
        if (!matches)
            return state;
        const [, requestName, requestState] = matches;
        if (requestState === started)
            draft[requestName] = { loading: true };
        else if (requestState === failed)
            draft[requestName] = { loading: false, error: action.payload?.error };
        else if (draft[requestName])
            delete draft[requestName];
        return draft;
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC1yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9yZXF1ZXN0LXJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxPQUFPLE1BQU0sT0FBTyxDQUFDO0FBRzVCLE1BQU0sQ0FBQyxNQUFNLHFCQUFxQixHQUFHLENBQXNCLFdBSTFELEVBQUUsRUFBRTtJQUNILE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHLFdBQVcsSUFBSTtRQUMvQyxPQUFPLEVBQUUsU0FBUztRQUNsQixJQUFJLEVBQUUsTUFBTTtRQUNaLE1BQU0sRUFBRSxRQUFRO0tBQ2pCLENBQUM7SUFDRixNQUFNLEtBQUssR0FBRyxJQUFJLE1BQU0sQ0FBQyxTQUFTLE9BQU8sSUFBSSxJQUFJLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztJQUVoRSxPQUFPLENBQ0wsUUFFSSxFQUFFLEVBQ04sTUFBbUIsRUFDbkIsRUFBRSxDQUNGLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUU7UUFDckIsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQztRQUN4QixNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWpDLElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFFM0IsTUFBTSxDQUFDLEVBQUUsV0FBVyxFQUFFLFlBQVksQ0FBQyxHQUFHLE9BQU8sQ0FBQztRQUM5QyxJQUFJLFlBQVksS0FBSyxPQUFPO1lBQUUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDO2FBQ2hFLElBQUksWUFBWSxLQUFLLE1BQU07WUFDOUIsS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQzthQUNuRSxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUM7WUFBRSxPQUFPLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN2RCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDIn0=