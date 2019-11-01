import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';
import initStore, {history} from './store/index';
import Products from './pages/Products';
import Product from './pages/Product';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SuccessfulSignup from './pages/SuccessfulSignup';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import './assets/scss/flexboxgrid.scss';
import './assets/scss/style.scss';

const root = document.getElementById('app');
const store = initStore();

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Header key="header" />
            <Switch>
                <Route path="/" exact component={Products} />
                <Route path="/login" exact component={Login} />
                <Route path="/signup-success" exact component={SuccessfulSignup} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/profile" exact component={Profile} />
                <Route path="/product/:product" exact component={Product} />
                <Route path="*" component={NotFound} />
            </Switch>
        </ConnectedRouter>
    </Provider>,
    root
);
