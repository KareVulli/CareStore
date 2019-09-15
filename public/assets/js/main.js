window.onload = () => {
    const categories = document.querySelector('#categories');
    categories.addEventListener('change', () => {
        console.log('on change');
        createProducts(categories.value);
        return false;
    })

    createProducts(categories.value);
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
