import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import onSetSortByMiddleware from '../middleware/onSetSortByMiddleware';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    storeEnhancers(applyMiddleware(onSetSortByMiddleware, thunk))
);

export default store;
