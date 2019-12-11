/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

export default class CartList extends React.Component {
    static propTypes = {
        cart: PropTypes.array.isRequired,
        loading: PropTypes.bool.isRequired,
        itemElement: PropTypes.elementType
    };

    static defaultProps = {
        itemElement: CartItem
    }

    render() {
        let i = 0;
        const ItemElement = this.props.itemElement;
        const items = this.props.cart.map((item) => {
            i += 1;
            return <ItemElement key={i} item={item} />;
        });
        if (!this.props.loading && !this.props.cart.length) {
            return (
                <div className="row">
                    <div className="col-xs center-xs">
                        <p>Pole ühtegi toodet ostukorvis</p>
                    </div>
                </div>
            );
        }
        return (
            <div className={`list row ${this.props.loading ? 'loading' : ''}`}>
                {items}
            </div>
        );
    }
}
