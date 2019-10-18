import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {createBrowserHistory} from 'history';
import {routerMiddleware} from 'connected-react-router';
import createRootReducer from '../reducers/index';
import onSetSortByMiddleware from '../middleware/onSetSortByMiddleware';
import requestsMiddleware from '../middleware/requestsMiddleware';

export const history = createBrowserHistory();

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function initStore() {
    const store = createStore(
        createRootReducer(history),
        storeEnhancers(applyMiddleware(
            routerMiddleware(history),
            thunk,
            onSetSortByMiddleware,
            requestsMiddleware
        ))
    );
    return store;
}
