/* eslint-disable prefer-destructuring */
import {push} from 'connected-react-router';
import {error, success, info} from 'react-toastify-redux';
import requestAction from '../utils/requestAction';


export const FETCH_CHECK_EMAIL = 'FETCH_CHECK_EMAIL';
export const FETCH_REGISTER = 'FETCH_REGISTER';
export const FETCH_LOGIN = 'FETCH_LOGIN';
export const LOGOUT = 'LOGOUT';

export const ON_CHECK_EMAIL = 'ON_CHECK_EMAIL';
export const ON_REGISTER = 'ON_REGISTER';
export const ON_LOGIN = 'ON_LOGIN';

function onCheckEmail(response) {
    return {type: ON_CHECK_EMAIL, found: response.found};
}

function onRegister() {
    return (dispatch) => {
        dispatch(push('/login'));
        dispatch(success('Registeeritud edukalt! Palun logige sisse, et jätkata'));
    };
}

function onRegisterFailed() {
    return (dispatch) => {
        dispatch(error('Registeerimine ebaõnnestus. Palun kontrolli siestatud andmeid'));
    };
}

function onLogin(response) {
    return (dispatch) => {
        dispatch({type: ON_LOGIN, token: response.token, user: response.user});
        dispatch(push('/profile'));
        dispatch(success(`Teretulemast tagasi, ${response.user.firstname} 🤗`));
    };
}

function onLoginFailed() {
    return (dispatch) => {
        dispatch(error('Sisselogimine ebaõnnestus. Palun kontrolli siestatud andmeid'));
    };
}

export function logout() {
    return (dispatch) => {
        dispatch({type: LOGOUT});
        dispatch(info('Logisid välja. Bye bye 👋'));
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
        onFailure: onRegisterFailed,
        label: FETCH_REGISTER
    });
}

export function login(data) {
    return requestAction({
        url: '/api/auth/login',
        method: 'POST',
        data: data,
        onSuccess: onLogin,
        onFailure: onLoginFailed,
        label: FETCH_LOGIN
    });
}
