import { applyMiddleware, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import rootReducer from "redux/reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [ReduxThunk];

const enhancers = composeWithDevTools(applyMiddleware(...middleware));

const store = createStore(rootReducer, undefined, enhancers);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
