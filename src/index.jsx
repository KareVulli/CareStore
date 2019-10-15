import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Products from './pages/Products';
import Product from './pages/Product';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SuccessfulSignup from './pages/SuccessfulSignup';
import Profile from './pages/Profile';
import Header from './components/Header';
import './assets/scss/flexboxgrid.scss';
import './assets/scss/style.scss';

const root = document.getElementById('app');

ReactDOM.render(
    <Router key="router">
        <Header key="header" />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signup/success" exact component={SuccessfulSignup} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/" exact component={Products} />
        <Route path="/product/:product" exact component={Product} />
    </Router>,
    root
);
