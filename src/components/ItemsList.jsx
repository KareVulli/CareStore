import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

export default class ItemsList extends React.Component {
    static propTypes = {
        items: PropTypes.array.isRequired
    };

    render() {
        let i = 0;
        const items = this.props.items.map((item) => {
            i += 1;
            return (
                <Item
                    key={i}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                />
            );
        });
        return (
            <div className="products row">
                {items}
            </div>
        );
    }
}
