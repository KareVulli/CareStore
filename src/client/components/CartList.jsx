/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

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
                <Item
                    key={i}
                    id={item._id}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                />
            );
        });
        if (!this.props.loading && !this.props.items.length) {
            return (
                <div className="products row">
                    <div className="col-xs center-xs">
                        <p>Pole ühtegi toodet ostukorvis</p>
                    </div>
                </div>
            );
        }
        return (
            <div className={`products row ${this.props.loading ? 'loading' : ''}`}>
                {items}
            </div>
        );
    }
}
