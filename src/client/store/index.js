import {createStore, applyMiddleware, compose} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import {createBrowserHistory} from 'history';
import {routerMiddleware} from 'connected-react-router';
import createRootReducer from '../reducers/index';
import onSetSortByMiddleware from '../middleware/onSetSortByMiddleware';
import requestsMiddleware from '../middleware/requestsMiddleware';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart', 'account']
};
export const history = createBrowserHistory();
const rootReducer = createRootReducer(history);
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function initStore() {
    const store = createStore(
        persistedReducer,
        storeEnhancers(applyMiddleware(
            routerMiddleware(history),
            thunk,
            onSetSortByMiddleware,
            requestsMiddleware
        ))
    );
    return store;
}

export function initPersistor(store) {
    const persistor = persistStore(store);
    return persistor;
}
