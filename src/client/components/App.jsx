import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {ToastContainer} from 'react-toastify-redux';
import {Slide} from 'react-toastify';
import Header from './Header';
import Products from '../pages/Products';
import Product from '../pages/Product';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Profile from '../pages/Profile';
import NotFound from '../pages/NotFound';
import Cart from '../pages/Cart';
import 'react-toastify/dist/ReactToastify';
import '../assets/scss/flexboxgrid';
import '../assets/scss/style';

export default class App extends React.Component {
    render() {
        return [
            <Header key="header" />,
            <div key="routes" className="app-container">
                <ToastContainer
                    className="toast-container"
                    toastClassName="toast"
                    bodyClassName="toast-body"
                    progressClassName="toast-progress"
                    transition={Slide}
                />
                <Switch>
                    <Route path="/" exact component={Products} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/signup" exact component={Signup} />
                    <Route path="/profile" exact component={Profile} />
                    <Route path="/product/:product" exact component={Product} />
                    <Route path="/cart" exact component={Cart} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </div>
        ];
    }
}
