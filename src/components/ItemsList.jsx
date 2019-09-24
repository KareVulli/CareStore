import React from 'react';
import Item from './Item';

export default class ItemsList extends React.Component {
    render() {
        let i = 0;
        const items = this.props.items.map((item) => {
            i += 1;
            return <Item key={i} name={item.name} price={item.price} image={item.image} />;
        });
        return (
            <div className="products row">
                {items}
            </div>
        );
    }
}
