import React from 'react';
import Item from './Item.jsx';

export default class ItemsList extends React.Component {
    render() {
        let i = 0
        const items = this.props.items.map(item => 
            <Item key={i++} name={item.name} price={item.price} image={item.image} />
        );
        return (
            <div className="products row">
                {items}
            </div>
        );
    }
}