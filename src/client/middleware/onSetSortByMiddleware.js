import {SET_SORT_BY, TOGGLE_CATEGORY, loadProducts} from '../actions/products';

export default ({dispatch}) => (next) => (action) => {
    next(action);
    if (action.type === SET_SORT_BY || action.type === TOGGLE_CATEGORY) {
        console.log('updating products');
        dispatch(loadProducts());
    }
};
