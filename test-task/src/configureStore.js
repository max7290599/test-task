import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './state';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default (initialState) => createStore(
    rootReducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk)),
);
