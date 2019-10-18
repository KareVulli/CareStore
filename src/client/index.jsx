import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import initStore, {history} from './store/index';
import App from './components/App';

const root = document.getElementById('app');
const store = initStore();
render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    root
);
