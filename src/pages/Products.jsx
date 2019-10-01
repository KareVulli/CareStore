import React from 'react';
import ItemsList from '../components/ItemsList';
import Header from '../components/Header';

export default class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };

        this.onCategoryChanged = this.onCategoryChanged.bind(this);
    }

    componentDidMount() {
        this.loadProducts();
    }

    onCategoryChanged(e) {
        switch (e.target.value) {
        case 'computers':
            this.loadProducts('computers');
            break;
        case 'phones':
            this.loadProducts('phones');
            break;
        case 'all':
        default:
            this.loadProducts();
            break;
        }
    }

    loadProducts(category = null) {
        let url = '/api/products';
        if (category) {
            url += `/${category}`;
        }
        fetch(url)
            .then((response) => response.json())
            .then((products) => {
                this.setState({
                    products
                });
            });
    }

    render() {
        return (
            <div>
                <Header key="header" />
                <div className="container">
                    <div className="row">
                        <div className="col-xs">
                            <p>Kategooria:</p>
                            <select id="categories" onChange={this.onCategoryChanged}>
                                <option value="all">Kõik</option>
                                <option value="computers">Arvutid</option>
                                <option value="phones">Telefonid</option>
                            </select>
                        </div>
                    </div>
                    <ItemsList items={this.state.products} />
                </div>
            </div>
        );
    }
}
