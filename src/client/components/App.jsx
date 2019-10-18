import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Products from '../pages/Products';
import Product from '../pages/Product';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import SuccessfulSignup from '../pages/SuccessfulSignup';
import Profile from '../pages/Profile';
import Header from './Header';
import '../assets/scss/flexboxgrid.scss';
import '../assets/scss/style.scss';

export default class App extends React.Component {
    render() {
        return (
            <Router key="router">
                <Header key="header" />
                <Route path="/login" exact component={Login} />
                <Route path="/signup-success" exact component={SuccessfulSignup} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/profile" exact component={Profile} />
                <Route path="/" exact component={Products} />
                <Route path="/product/:product" exact component={Product} />
            </Router>
        );
    }
}
