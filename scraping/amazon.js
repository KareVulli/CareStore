{
    // Example page to run this in:
    // https://www.amazon.com/s?i=computers-intl-ship&bbn=16225007011&rh=n%3A16225007011%2Cn%3A13896617011%2Cn%3A565108&dc&fst=as%3Aoff&qid=1568362168&rnid=13896617011&ref=sr_nr_n_2

    async function fetchProducts() {
        const items = document.querySelector('.s-search-results').children

        let promises = []
        
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            promises.push(parseProduct(i, item));
        }

        return await Promise.all(promises).then(products => {
            return products
        })
    }

    async function parseProduct(i, item) {
        const nameElement = item.querySelector('span.a-size-medium.a-color-base.a-text-normal')
        const name = nameElement.textContent.trim();
        const category = item.querySelector('a.a-size-base.a-link-normal.a-text-bold').textContent.trim();
        const price = parseFloat(item.querySelector('span.a-offscreen').textContent.trim().replace('$', ''));
        const image = item.querySelector('img.s-image').src;
        const url = nameElement.parentElement.href; // Single product page
        
        
        // Get product description
        return await fetch(url)
            .then(response => {
                return response.text();
            })
            .then(html => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, "text/html");
                let points = doc.querySelectorAll('#featurebullets_feature_div li:not(#replacementPartsFitmentBullet) .a-list-item');
                let descriptions = [];
                for (let j = 0; j < points.length; j++) {
                    const point = points[j];
                    descriptions.push(point.textContent.trim());
                }
                return descriptions.join('; ')
                
            }).then(description => {
                console.log('Product ' + i + ' parsed.');
                return {name, category, price, image, description};
            });
    }

    fetchProducts().then(products => {
        console.log(products)
    })
}