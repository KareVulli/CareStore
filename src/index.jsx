import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Products from './pages/Products';
import Product from './pages/Product';

const root = document.getElementById('app');

ReactDOM.render(
    <Router key="router">
        <Route path="/" exact component={Products} />
        <Route path="/product" exact component={Product} />
    </Router>,
    root
);
