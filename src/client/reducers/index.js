import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import {toastsReducer} from 'react-toastify-redux';
import productsReducer from './products';
import requestsReducer from './requests';
import accountReducer from './account';
import cartReducer from './cart';

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    toasts: toastsReducer,
    products: productsReducer,
    requests: requestsReducer,
    account: accountReducer,
    cart: cartReducer
});

export default createRootReducer;
