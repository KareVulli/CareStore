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
import React from "react";
import ReactDOM from "react-dom";

const node = document.getElementById("app");

ReactDOM.render(
    React.createElement(
        "button",
        {},
        "I am a button, Hello world"
    ),
    node
);