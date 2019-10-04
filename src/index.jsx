import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Products from './pages/Products';
import Product from './pages/Product';
import Header from './components/Header';
import './assets/scss/flexboxgrid.scss';
import './assets/scss/style.scss';

const root = document.getElementById('app');

ReactDOM.render(
    <Router key="router">
        <Header key="header" />
        <Route path="/" exact component={Products} />
        <Route path="/product/:product" exact component={Product} />
    </Router>,
    root
);
