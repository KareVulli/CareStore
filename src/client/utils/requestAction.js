export const REQUEST = 'REQUEST';

export default ({
    url = '',
    method = 'GET',
    data = null,
    onSuccess = null,
    onFailure = null,
    label = ''
}) => ({
    type: REQUEST,
    payload: {
        url,
        method,
        data,
        onSuccess,
        onFailure,
        label
    }
});
