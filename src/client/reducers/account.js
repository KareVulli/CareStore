/* eslint-disable no-param-reassign */
import produce from 'immer';
import createReducer from '../utils/createReducer';

const initialState = {
    emailUnique: true,
    token: null,
    user: null
};

function onCheckEmail(state, action) {
    return produce(state, (draft) => {
        draft.emailUnique = !action.found;
    });
}

function onRegister(state, action) {
    return produce(state, (draft) => {
        draft.emailUnique = action.found;
    });
}

function onLogin(state, action) {
    return produce(state, (draft) => {
        draft.token = action.token;
        draft.user = action.user;
    });
}

export default createReducer(initialState, {
    ON_CHECK_EMAIL: onCheckEmail,
    ON_REGISTER: onRegister,
    ON_LOGIN: onLogin
});
