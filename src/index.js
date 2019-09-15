import products from './products.js';
import product from './product.js';

window.onload = () => {
    // Temporary solution
    if (window.location.pathname === '/product.html') {
        product();
    } else {
        products();
    }
}
