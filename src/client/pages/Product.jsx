import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartPlus} from '@fortawesome/free-solid-svg-icons';
import Button from '../components/Button';
import {addProduct} from '../actions/cart';
import {getProduct, isProductLoading} from '../selectors';
import {loadProduct} from '../actions/products';

class Product extends React.Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        addProduct: PropTypes.func.isRequired,
        loadProduct: PropTypes.func.isRequired,
        product: PropTypes.object.isRequired,
        loading: PropTypes.bool.isRequired
    };

    constructor(props) {
        super(props);
        this.onAddToCart = this.onAddToCart.bind(this);
    }

    componentDidMount() {
        this.props.loadProduct(this.props.match.params.product);
    }

    onAddToCart() {
        this.props.addProduct(this.props.product);
    }

    render() {
        if (this.props.loading) {
            return <div className="container"><p>Laen...</p></div>;
        }

        const button = (
            <span>
                Lisa ostukorvi
                <FontAwesomeIcon className="margin-left-2" icon={faCartPlus} size="lg" />
            </span>
        );
        return (
            <div className="container page-product">
                <div className="card">
                    <div className="row">
                        <div className="col-xs-12 col-sm-4 center-xs margin-top-4">
                            <img className="image" src={this.props.product.image} alt={this.props.product.name} />
                        </div>
                        <div className="col-xs-12 col-sm-8">
                            <h2>{this.props.product.name}</h2>
                            <p className="text-primary text-large">{`${this.props.product.price} €`}</p>
                            <p className="product-description">{this.props.product.description}</p>
                            <div className="row middle-xs">
                                <div className="col-xs margin-right-2">
                                    <Button title={button} size="large" onClick={this.onAddToCart} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    product: getProduct(state),
    loading: isProductLoading(state)
});

const mapDispatchToProps = (dispatch) => ({
    loadProduct: (id) => dispatch(loadProduct(id)),
    addProduct: (product) => dispatch(addProduct(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
