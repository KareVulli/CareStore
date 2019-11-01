/* eslint-disable quote-props */
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import CartList from '../components/CartList';
import {
    loadProducts, FETCH_PRODUCTS
} from '../actions/products';

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
        return (
            <div className="container">
                <div className="row middle-xs">
                    <div className="col-xs">
                        <h1>Ostukorv</h1>
                    </div>
                    <div className="col-xs end-xs">
                        <p>{`Ostukorvis tooteid: ${1}`}</p>
                    </div>
                </div>
                <div className="row middle-xs">
                    <div className="col-xs-12 col-sm">
                        <h1>Ostukorv</h1>
                        <CartList loading={false} />
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
