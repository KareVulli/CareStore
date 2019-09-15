window.onload = () => {
    const params = new URLSearchParams(window.location.search)
    //alert('Toode: ' + params.get('title') + '\nHind: ' + params.get('price') + '\nPildi url: ' + params.get('image'))
    
    const container = document.getElementById('product');

    const titleElement = document.createElement('p');
    titleElement.textContent = params.get('title');
    titleElement.classList.add('product-title');

    const imageElement = document.createElement('img');
    imageElement.src = params.get('image');
    imageElement.classList.add('product-image');

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = params.get('description');
    descriptionElement.classList.add('product-description');

    const priceElement = document.createElement('p');
    priceElement.textContent = params.get('price') + ' €';
    priceElement.classList.add('product-price');

    container.append(titleElement);
    container.append(imageElement);
    container.append(descriptionElement);
    container.append(priceElement);
}
