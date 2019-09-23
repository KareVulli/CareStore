/* import products from './products.js';
import product from './product.js';

window.onload = () => {
    // Temporary solution
    if (window.location.pathname === '/product.html') {
        product();
    } else {
        products();
    }
}
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.jsx';
import Products from './pages/Products.jsx';
import Product from './pages/Product.jsx';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const root = document.getElementById('app');


const elements = [
    <Header key='header' />,
    <Router key='router'>
        <Route path="/" exact component={Products} />
        <Route path="/product" exact component={Product} />
    </Router>
];

ReactDOM.render(
    elements,
    root
);