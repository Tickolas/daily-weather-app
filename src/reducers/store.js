import { applyMiddleware, compose, createStore } from 'redux';
import createRootReducer from 'reducers/root.reducer';
import { routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';

const initialState = {};

const middleware = [thunk];
const enhancers = [];

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ...enhancers
);

const store = createStore(
    createRootReducer({
        router: routerReducer
    }),
    initialState,
    composedEnhancers
);

export default store;
