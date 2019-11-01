/* eslint-disable quote-props */
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import CartList from '../components/CartList';
import {
    loadProducts, FETCH_PRODUCTS
} from '../actions/products';
import Button from '../components/Button';

class Cart extends React.Component {
    static propTypes = {
        products: PropTypes.array.isRequired,
        productsRequest: PropTypes.object,

        loadProducts: PropTypes.func.isRequired
    };

    static defaultProps = {
        productsRequest: null
    }

    componentDidMount() {
        this.props.loadProducts();
    }

    render() {
        let loading = false;
        if (this.props.productsRequest && this.props.productsRequest.loading) {
            loading = true;
        }

        const items = [];
        for (let i = 0; i < this.props.products.length && i < 5; i += 1) {
            const product = {...this.props.products[i]};
            product.quantity = 1;
            items.push(product);
        }

        return (
            <div className="container">
                <div className="row middle-xs">
                    <div className="col-xs">
                        <h1>Ostukorv</h1>
                    </div>
                    <div className="col-xs end-xs">
                        <p>{`Ostukorvis tooteid: ${items.length}`}</p>
                    </div>
                </div>
                <div className="row middle-xs">
                    <div className="col-xs-12 col-sm">
                        <CartList items={items} loading={loading} />
                    </div>
                </div>
                <div className="row middle-xs">
                    <div className="col-xs-3 end-xs col-xs-offset-9 margin-top-4">
                        <strong>{`Kokku: ${items.reduce((prev, item) => prev + (item.price * item.quantity), 0)} €`}</strong>
                    </div>
                </div>
                <div className="row middle-xs">
                    <div className="col-xs-12 end-xs margin-top-4">
                        <Button title="Kinnita ost" />
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    products: state.products.products,
    productsRequest: state.requests[FETCH_PRODUCTS]
});

const mapDispatchToProps = (dispatch) => ({
    loadProducts: () => dispatch(loadProducts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
