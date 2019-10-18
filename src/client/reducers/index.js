import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import productsReducer from './products';
import requestsReducer from './requests';
import accountReducer from './account';

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    products: productsReducer,
    requests: requestsReducer,
    account: accountReducer
});

export default createRootReducer;
