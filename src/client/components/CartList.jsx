/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

export default class CartList extends React.Component {
    static propTypes = {
        items: PropTypes.array.isRequired,
        loading: PropTypes.bool.isRequired
    };

    render() {
        let i = 0;
        const items = this.props.items.map((item) => {
            i += 1;
            return (
                <CartItem
                    key={i}
                    id={item._id}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    quantity={item.quantity}
                />
            );
        });
        if (!this.props.loading && !this.props.items.length) {
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
