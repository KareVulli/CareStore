/* eslint-disable prefer-destructuring */
import {push} from 'connected-react-router';
import requestAction from '../utils/requestAction';


export const FETCH_CHECK_EMAIL = 'FETCH_CHECK_EMAIL';
export const FETCH_REGISTER = 'FETCH_REGISTER';
export const FETCH_LOGIN = 'FETCH_LOGIN';

export const ON_CHECK_EMAIL = 'ON_CHECK_EMAIL';
export const ON_REGISTER = 'ON_REGISTER';
export const ON_LOGIN = 'ON_REGISTER';

function onCheckEmail(response) {
    return {type: ON_CHECK_EMAIL, found: response.found};
}

function onRegister() {
    return (dispatch) => {
        dispatch(push('/signup-success'));
    };
}

function onLogin() {
    return (dispatch) => {
        dispatch(push('/profile/'));
    };
}

export function checkEmail(email) {
    return (dispatch) => dispatch(requestAction({
        url: '/api/users/by-email',
        data: {email},
        onSuccess: onCheckEmail,
        label: FETCH_CHECK_EMAIL
    }));
}

export function register(data) {
    return requestAction({
        url: '/api/users',
        method: 'POST',
        data: data,
        onSuccess: onRegister,
        label: FETCH_REGISTER
    });
}

export function login(data) {
    return requestAction({
        url: '/api/users/login',
        method: 'POST',
        data: data,
        onSuccess: onLogin,
        label: FETCH_LOGIN
    });
}
