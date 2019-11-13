import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartPlus} from '@fortawesome/free-solid-svg-icons';
import Button from '../components/Button';
import {addProduct} from '../actions/cart';

class Product extends React.Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        addProduct: PropTypes.func.isRequired
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

        this.onAddToCart = this.onAddToCart.bind(this);
    }

    componentDidMount() {
        this.loadProduct(this.props.match.params.product);
    }

    onAddToCart() {
        this.props.addProduct({...this.state.product, quantity: 1});
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
        const button = (
            <span>
                Lisa ostukorvi
                <FontAwesomeIcon className="margin-left-2" icon={faCartPlus} size="lg" />
            </span>
        );
        return (
            <div>
                <div className="container page-product">
                    <div className="card">
                        <div className="row">
                            <div className="col-xs-12 col-sm-4 center-xs margin-top-4">
                                <img className="image" src={this.state.product.image} alt={this.state.product.name} />
                            </div>
                            <div className="col-xs-12 col-sm-8">
                                <h2>{this.state.product.name}</h2>
                                <p className="text-primary text-large">{`${this.state.product.price} €`}</p>
                                <p className="product-description">{this.state.product.description}</p>
                                <div className="row middle-xs">
                                    <div className="col-xs margin-right-2">
                                        <Button title={button} size="large" onClick={this.onAddToCart} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    addProduct: (product) => dispatch(addProduct(product))
});

export default connect(null, mapDispatchToProps)(Product);
