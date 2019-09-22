import React from 'react';

export default class Item extends React.Component {
    render() {
        return (
            <div className="product-container col-xs-12 col-sm-4">
                <a className="product row middle-xs" href={'product.html?title=HP Spectre 13 x360&price=1399&image=assets/images/product3.jpg'}>
                    <div className="col-xs-4 end-xs">
                        <img className="product-logo" src={this.props.image} alt={this.props.name} />
                    </div>
                    <div className="col-xs-8">
                        <p className="product-title">{this.props.name}</p>
                        <p className="product-price">Hind: {this.props.price} €</p>
                    </div>
                </a>
            </div>
        );
    }
}