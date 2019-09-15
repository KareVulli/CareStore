function renderProduct(product, container) {
    let itemContainer = document.createElement('div');
    itemContainer.classList.add('product-container', 'col-xs-12');

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
