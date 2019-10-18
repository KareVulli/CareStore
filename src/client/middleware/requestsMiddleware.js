import axios from 'axios';
import {requestStart, requestError, requestEnd} from '../actions/requests';
import {REQUEST} from '../utils/requestAction';

export default ({dispatch}) => (next) => (action) => {
    next(action);

    if (action.type !== REQUEST) return;

    const {
        url,
        method,
        data,
        onSuccess,
        onFailure,
        label
    } = action.payload;

    const dataOrParams = ['GET', 'DELETE'].includes(method) ? 'params' : 'data';

    if (label) {
        dispatch(requestStart(label));
    }

    axios
        .request({
            url: url,
            method,
            [dataOrParams]: data
        })
        .then((response) => {
            if (onSuccess) {
                dispatch(onSuccess(response.data));
            }
        })
        .catch((error) => {
            const response = {};
            if (error.response) {
                response.status = error.response.status;
                response.response = error.response.data;
                if (error.response.data.message) {
                    response.message = error.response.data.message;
                } else {
                    response.message = error.message;
                }
            } else {
                response.message = error.message;
            }
            dispatch(requestError(label, response));
            if (onFailure) {
                dispatch(onFailure(error));
            }
        })
        .finally(() => {
            if (label) {
                dispatch(requestEnd(label));
            }
        });
};
