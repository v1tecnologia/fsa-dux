import { applyMiddleware, createStore, } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import thunkMiddleware from 'redux-thunk';
export const configureStore = ({ production, persistConfig, afterRehydrate, rootReducer, enhancers = [], devToolsEnhancerOptions, }) => {
    const thunk = thunkMiddleware;
    const storeEnhancers = [applyMiddleware(thunk)];
    if (!production) {
        import('redux-devtools-extension')
            .then(({ devToolsEnhancer }) => {
            storeEnhancers.push(devToolsEnhancer(devToolsEnhancerOptions));
        })
            .catch();
    }
    storeEnhancers.push(...enhancers);
    const persistedReducer = persistReducer(persistConfig, rootReducer);
    const store = createStore(persistedReducer, ...storeEnhancers);
    const persistor = persistStore(store, undefined, () => {
        if (afterRehydrate)
            afterRehydrate(store);
    });
    return { store, persistor };
};
// TODO: docs to show how to do hot module replacement with the store
export const hotModuleReplacement = ({ production, store, persistConfig, rootReducerPath, }) => {
    if (production && module.hot) {
        module.hot.accept(rootReducerPath, () => {
            // This fetch the new state of the above reducers.
            const nextRootReducer = require(rootReducerPath).rootReducer;
            store.replaceReducer(persistReducer(persistConfig, nextRootReducer));
        });
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJlLXN0b3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9jb25maWd1cmUtc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUdMLGVBQWUsRUFDZixXQUFXLEdBSVosTUFBTSxPQUFPLENBQUM7QUFFZixPQUFPLEVBQWlCLGNBQWMsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUUsT0FBTyxlQUFvQyxNQUFNLGFBQWEsQ0FBQztBQUUvRCxNQUFNLENBQUMsTUFBTSxjQUFjLEdBQUcsQ0FBYyxFQUMxQyxVQUFVLEVBQ1YsYUFBYSxFQUNiLGNBQWMsRUFDZCxXQUFXLEVBQ1gsU0FBUyxHQUFHLEVBQUUsRUFDZCx1QkFBdUIsR0FReEIsRUFBRSxFQUFFO0lBQ0gsTUFBTSxLQUFLLEdBQXNDLGVBQWUsQ0FBQztJQUNqRSxNQUFNLGNBQWMsR0FBOEIsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUUzRSxJQUFJLENBQUMsVUFBVSxFQUFFO1FBQ2YsTUFBTSxDQUFDLDBCQUEwQixDQUFDO2FBQy9CLElBQUksQ0FBQyxDQUFDLEVBQUUsZ0JBQWdCLEVBQUUsRUFBRSxFQUFFO1lBQzdCLGNBQWMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLENBQUMsQ0FBQzthQUNELEtBQUssRUFBRSxDQUFDO0tBQ1o7SUFDRCxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUM7SUFFbEMsTUFBTSxnQkFBZ0IsR0FBRyxjQUFjLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBRXBFLE1BQU0sS0FBSyxHQUFpQixXQUFXLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxjQUFjLENBQUMsQ0FBQztJQUM3RSxNQUFNLFNBQVMsR0FBRyxZQUFZLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUU7UUFDcEQsSUFBSSxjQUFjO1lBQUUsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQztBQUM5QixDQUFDLENBQUM7QUFFRixxRUFBcUU7QUFDckUsTUFBTSxDQUFDLE1BQU0sb0JBQW9CLEdBQUcsQ0FBQyxFQUNuQyxVQUFVLEVBQ1YsS0FBSyxFQUNMLGFBQWEsRUFDYixlQUFlLEdBTWhCLEVBQUUsRUFBRTtJQUNILElBQUksVUFBVSxJQUFLLE1BQWMsQ0FBQyxHQUFHLEVBQUU7UUFDcEMsTUFBYyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLEdBQUcsRUFBRTtZQUMvQyxrREFBa0Q7WUFDbEQsTUFBTSxlQUFlLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDLFdBQVcsQ0FBQztZQUM3RCxLQUFLLENBQUMsY0FBYyxDQUNsQixjQUFjLENBQUMsYUFBYSxFQUFFLGVBQWUsQ0FBUSxDQUN0RCxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7S0FDSjtBQUNILENBQUMsQ0FBQyJ9