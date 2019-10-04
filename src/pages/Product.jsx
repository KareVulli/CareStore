import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
    static propTypes = {
        match: PropTypes.array.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            product: {
                name: '',
                image: '',
                description: '',
                price: 0
            }
        };
    }

    componentDidMount() {
        this.loadProduct(this.props.match.params.product);
    }

    loadProduct(id) {
        fetch(`/api/product/${id}`)
            .then((response) => response.json())
            .then((product) => {
                this.setState({
                    product
                });
            });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="product">
                        <p className="product-title">{this.state.product.name}</p>
                        <img src={this.state.product.image} alt={this.state.product.name} />
                        <p className="product-description">{this.state.product.description}</p>
                        <p className="product-price">{`${this.state.product.price} €`}</p>
                    </div>
                </div>
            </div>
        );
    }
}
