import { computers, phones } from './productsList.js';

function renderProduct(product, container) {
    let itemContainer = document.createElement('div');
    itemContainer.classList.add('product-container', 'col-xs-12', 'col-md-6');

    let itemLink = document.createElement('a');
    itemLink.classList.add('product', 'row', 'middle-xs');
    itemLink.href = 'product.html?title=' + product.name + '&price=' + product.price + '&image=' + product.image + '&description=' + product.description;
    
    let imageContainer = document.createElement('div');
    imageContainer.classList.add('col-xs-4', 'col-sm-2', 'center-xs');

    let image = document.createElement('img');
    image.classList.add('product-logo');
    image.src = product.image;
    image.alt = product.name;

    let detailsContainer = document.createElement('div');
    detailsContainer.classList.add('col-xs-8');

    let title = document.createElement('p');
    title.classList.add('product-title');
    title.textContent = product.name;
    
    let price = document.createElement('p');
    price.classList.add('product-price');
    price.textContent = 'Hind: ' + new Intl.NumberFormat('et-EE', { style: 'currency', currency: 'EUR' }).format(product.price)

    imageContainer.append(image);
    detailsContainer.append(title);
    detailsContainer.append(price);
    itemLink.append(imageContainer);
    itemLink.append(detailsContainer);
    itemContainer.append(itemLink);
    container.append(itemContainer);
}

function createProducts(category){
    console.log('createProducts(' + category + ')');
    const container = document.querySelector('.products');
    container.innerHTML = '';

    /* 
        <div class="product-container col-xs-12 col-sm-4">
            <a class="product row middle-xs" href="product.html?title=HP Spectre 13 x360&price=1399&image=assets/images/product3.jpg">
                <div class="col-xs-4 end-xs">
                    <img class="product-logo" src="assets/images/product3.jpg" alt="Toode1">
                </div>
                <div class="col-xs-8">
                    <p class="product-title">HP Spectre 13 x360</p>
                    <p class="product-price">Hind: 1399 €</p>
                </div>
            </a>
        </div>
    */

    if (category === 'phones') {
        phones.forEach(product => {
            renderProduct(product, container);
        })
    } else if (category === 'computers') {
        computers.forEach(product => {
            renderProduct(product, container);
        })
    } else {
        computers.forEach(product => {
            renderProduct(product, container);
        })
        phones.forEach(product => {
            renderProduct(product, container);
        })
    }
}

export default () => {
    const categories = document.querySelector('#categories');
    categories.addEventListener('change', () => {
        createProducts(categories.value);
        return false;
    })

    createProducts(categories.value);
};
