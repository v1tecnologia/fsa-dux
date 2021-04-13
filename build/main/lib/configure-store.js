"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const redux_persist_1 = require("redux-persist");
const redux_thunk_1 = __importDefault(require("redux-thunk"));
exports.configureStore = ({ production, persistConfig, afterRehydrate, rootReducer, enhancers = [], devToolsEnhancerOptions, }) => {
    const thunk = redux_thunk_1.default;
    const storeEnhancers = [redux_1.applyMiddleware(thunk)];
    if (!production) {
        Promise.resolve().then(() => __importStar(require('redux-devtools-extension'))).then(({ devToolsEnhancer }) => {
            storeEnhancers.push(devToolsEnhancer(devToolsEnhancerOptions));
        })
            .catch();
    }
    storeEnhancers.push(...enhancers);
    const persistedReducer = redux_persist_1.persistReducer(persistConfig, rootReducer);
    const store = redux_1.createStore(persistedReducer, ...storeEnhancers);
    const persistor = redux_persist_1.persistStore(store, undefined, () => {
        if (afterRehydrate)
            afterRehydrate(store);
    });
    return { store, persistor };
};
// TODO: docs to show how to do hot module replacement with the store
exports.hotModuleReplacement = ({ production, store, persistConfig, rootReducerPath, }) => {
    if (production && module.hot) {
        module.hot.accept(rootReducerPath, () => {
            // This fetch the new state of the above reducers.
            const nextRootReducer = require(rootReducerPath).rootReducer;
            store.replaceReducer(redux_persist_1.persistReducer(persistConfig, nextRootReducer));
        });
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJlLXN0b3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9jb25maWd1cmUtc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsaUNBUWU7QUFFZixpREFBNEU7QUFDNUUsOERBQStEO0FBRWxELFFBQUEsY0FBYyxHQUFHLENBQWMsRUFDMUMsVUFBVSxFQUNWLGFBQWEsRUFDYixjQUFjLEVBQ2QsV0FBVyxFQUNYLFNBQVMsR0FBRyxFQUFFLEVBQ2QsdUJBQXVCLEdBUXhCLEVBQUUsRUFBRTtJQUNILE1BQU0sS0FBSyxHQUFzQyxxQkFBZSxDQUFDO0lBQ2pFLE1BQU0sY0FBYyxHQUE4QixDQUFDLHVCQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUUzRSxJQUFJLENBQUMsVUFBVSxFQUFFO1FBQ2Ysa0RBQU8sMEJBQTBCLElBQzlCLElBQUksQ0FBQyxDQUFDLEVBQUUsZ0JBQWdCLEVBQUUsRUFBRSxFQUFFO1lBQzdCLGNBQWMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLENBQUMsQ0FBQzthQUNELEtBQUssRUFBRSxDQUFDO0tBQ1o7SUFDRCxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUM7SUFFbEMsTUFBTSxnQkFBZ0IsR0FBRyw4QkFBYyxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUVwRSxNQUFNLEtBQUssR0FBaUIsbUJBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLGNBQWMsQ0FBQyxDQUFDO0lBQzdFLE1BQU0sU0FBUyxHQUFHLDRCQUFZLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUU7UUFDcEQsSUFBSSxjQUFjO1lBQUUsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQztBQUM5QixDQUFDLENBQUM7QUFFRixxRUFBcUU7QUFDeEQsUUFBQSxvQkFBb0IsR0FBRyxDQUFDLEVBQ25DLFVBQVUsRUFDVixLQUFLLEVBQ0wsYUFBYSxFQUNiLGVBQWUsR0FNaEIsRUFBRSxFQUFFO0lBQ0gsSUFBSSxVQUFVLElBQUssTUFBYyxDQUFDLEdBQUcsRUFBRTtRQUNwQyxNQUFjLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsR0FBRyxFQUFFO1lBQy9DLGtEQUFrRDtZQUNsRCxNQUFNLGVBQWUsR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUMsV0FBVyxDQUFDO1lBQzdELEtBQUssQ0FBQyxjQUFjLENBQ2xCLDhCQUFjLENBQUMsYUFBYSxFQUFFLGVBQWUsQ0FBUSxDQUN0RCxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7S0FDSjtBQUNILENBQUMsQ0FBQyJ9