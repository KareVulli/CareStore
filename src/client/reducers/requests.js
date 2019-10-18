/* eslint-disable no-param-reassign */
import produce from 'immer';
import createReducer from '../utils/createReducer';

const initialState = {
    requests: {}
};

function requestStart(state, action) {
    return produce(state, (draft) => {
        if (action.label) {
            draft[action.label] = {loading: true};
        } else {
            draft.global = {loading: true};
        }
    });
}

function requestEnd(state, action) {
    return produce(state, (draft) => {
        if (action.label) {
            draft[action.label].loading = false;
        } else {
            draft.global.loading = false;
        }
    });
}

function requestError(state, action) {
    console.log('requestError', action.error);
    return produce(state, (draft) => {
        if (action.label) {
            draft[action.label].error = action.error;
        } else {
            draft.global.loading = action.error;
        }
    });
}

export default createReducer(initialState, {
    REQUEST_START: requestStart,
    REQUEST_END: requestEnd,
    REQUEST_ERROR: requestError
});
