
import {SET_PRODUCTS, TOGGLE_CATEGORY} from '../actions/products';

const initialState = {
    products: [],
    selectedCategories: ['phones'],
    sortBy: 'name|asc'
};

function rootReducer(state = initialState, action) {
    if (action.type === SET_PRODUCTS) {
        return {...state, products: action.products};
    }
    if (action.type === TOGGLE_CATEGORY) {
        const selection = [...state.selectedCategories];
        const index = selection.indexOf(action.category);
        if (index > -1) {
            selection.splice(index, 1);
        } else {
            selection.push(action.category);
        }
        return {...state, selectedCategories: selection};
    }
    return state;
}

export default rootReducer;
