const basePath = '/api';

const getItem = (id) => fetch(`${basePath}/product/${id}`)
    .then((response) => response.json());

export default {getItem};
