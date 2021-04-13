import syncActionFactory from 'typescript-fsa';
import asyncFactory from 'typescript-fsa-redux-thunk';
export const actionCreators = (apiAction, namespace) => {
    const create = syncActionFactory(namespace);
    const createAsync = asyncFactory(create);
    const createApi = (type, configFunc) => createAsync(type, async ({ params, onFailure: componentOnFailure, onSuccess: componentOnSuccess, onAfter: componentOnAfter, onBefore: componentOnBefore, }, dispatch, getState) => {
        const { onSuccess: actionOnSuccess, onFailure: actionOnFailure, onAfter: actionOnAfter, onBefore: actionOnBefore, params: configParams, ...rest } = configFunc({ params, dispatch, getState });
        return apiAction({
            params: configParams || params,
            ...rest,
            onSuccess: data => {
                if (componentOnSuccess)
                    componentOnSuccess(data);
                if (actionOnSuccess)
                    actionOnSuccess(data);
            },
            onFailure: error => {
                if (componentOnFailure)
                    componentOnFailure(error);
                if (actionOnFailure)
                    actionOnFailure(error);
            },
            onAfter: isError => {
                if (componentOnAfter)
                    componentOnAfter(isError);
                if (actionOnAfter)
                    actionOnAfter(isError);
            },
            onBefore: () => {
                if (componentOnBefore)
                    componentOnBefore();
                if (actionOnBefore)
                    actionOnBefore();
            },
        });
    });
    return {
        create,
        createAsync,
        createApi,
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLWNyZWF0b3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9hY3Rpb24tY3JlYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxpQkFBZ0MsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5RCxPQUFPLFlBQVksTUFBTSw0QkFBNEIsQ0FBQztBQWlCdEQsTUFBTSxDQUFDLE1BQU0sY0FBYyxHQUFHLENBQzVCLFNBQThDLEVBQzlDLFNBQWlCLEVBQ2pCLEVBQUU7SUFDRixNQUFNLE1BQU0sR0FBRyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM1QyxNQUFNLFdBQVcsR0FBRyxZQUFZLENBQVEsTUFBTSxDQUFDLENBQUM7SUFDaEQsTUFBTSxTQUFTLEdBQUcsQ0FDaEIsSUFBWSxFQUNaLFVBTXlDLEVBQ3pDLEVBQUUsQ0FDRixXQUFXLENBQ1QsSUFBSSxFQUNKLEtBQUssRUFDSCxFQUNFLE1BQU0sRUFDTixTQUFTLEVBQUUsa0JBQWtCLEVBQzdCLFNBQVMsRUFBRSxrQkFBa0IsRUFDN0IsT0FBTyxFQUFFLGdCQUFnQixFQUN6QixRQUFRLEVBQUUsaUJBQWlCLEdBQzVCLEVBQ0QsUUFBUSxFQUNSLFFBQVEsRUFDUixFQUFFO1FBQ0YsTUFBTSxFQUNKLFNBQVMsRUFBRSxlQUFlLEVBQzFCLFNBQVMsRUFBRSxlQUFlLEVBQzFCLE9BQU8sRUFBRSxhQUFhLEVBQ3RCLFFBQVEsRUFBRSxjQUFjLEVBQ3hCLE1BQU0sRUFBRSxZQUFZLEVBQ3BCLEdBQUcsSUFBSSxFQUNSLEdBQUcsVUFBVSxDQUFDLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBRS9DLE9BQU8sU0FBUyxDQUFpQjtZQUMvQixNQUFNLEVBQUUsWUFBWSxJQUFJLE1BQU07WUFDOUIsR0FBRyxJQUFJO1lBQ1AsU0FBUyxFQUFFLElBQUksQ0FBQyxFQUFFO2dCQUNoQixJQUFJLGtCQUFrQjtvQkFBRSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDakQsSUFBSSxlQUFlO29CQUFFLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3QyxDQUFDO1lBQ0QsU0FBUyxFQUFFLEtBQUssQ0FBQyxFQUFFO2dCQUNqQixJQUFJLGtCQUFrQjtvQkFBRSxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDbEQsSUFBSSxlQUFlO29CQUFFLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM5QyxDQUFDO1lBQ0QsT0FBTyxFQUFFLE9BQU8sQ0FBQyxFQUFFO2dCQUNqQixJQUFJLGdCQUFnQjtvQkFBRSxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDaEQsSUFBSSxhQUFhO29CQUFFLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM1QyxDQUFDO1lBQ0QsUUFBUSxFQUFFLEdBQUcsRUFBRTtnQkFDYixJQUFJLGlCQUFpQjtvQkFBRSxpQkFBaUIsRUFBRSxDQUFDO2dCQUMzQyxJQUFJLGNBQWM7b0JBQUUsY0FBYyxFQUFFLENBQUM7WUFDdkMsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FDRixDQUFDO0lBRUosT0FBTztRQUNMLE1BQU07UUFDTixXQUFXO1FBQ1gsU0FBUztLQUNWLENBQUM7QUFDSixDQUFDLENBQUMifQ==