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

const root = document.getElementById('app');


const elements = [
    <Header key='header' />,
    <Products key='page' />
];

ReactDOM.render(
    elements,
    root
);