import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import Button from './Button';
import {removeProduct} from '../actions/cart';

class CartItem extends React.Component {
    static propTypes = {
        item: PropTypes.object.isRequired,
        removeProduct: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.onRemove = this.onRemove.bind(this);
    }

    onRemove(event) {
        event.preventDefault();
        this.props.removeProduct(this.props.item.product);
    }

    render() {
        const {product} = this.props.item;
        return (
            <div className="list-item list-item-clickable col-xs-12">
                <Link className="cart-item row middle-xs padding-y-2" to={`/product/${this.props.item.productId}`}>
                    <div className="col-xs-3 col-sm-2">
                        <img className="cart-item-image" src={product.image} alt={product.name} />
                    </div>
                    <div className="col-xs-9 col-sm-5">
                        <p className="product-title">{product.name}</p>
                    </div>
                    <div className="col-xs-3 col-sm-2">
                        <p className="product-quantity">{`Kogus: ${this.props.item.quantity}`}</p>
                    </div>
                    <div className="col-xs-7 col-sm-2">
                        <p className="product-price">{`Hind: ${product.price} €`}</p>
                    </div>
                    <div className="col-xs-2 col-sm-1 end-xs">
                        <Button title={<FontAwesomeIcon icon={faTimes} size="2x" />} rule="button" type="simple-danger" onClick={this.onRemove} />
                    </div>
                </Link>
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => ({
    removeProduct: (product) => dispatch(removeProduct(product))
});

export default connect(null, mapDispatchToProps)(CartItem);
