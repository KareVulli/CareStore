import React from 'react';
import { Link } from 'react-router-dom';

export default class Item extends React.Component {
    render() {
        return (
            <div className="product-container col-xs-12 col-sm-4">
                <Link className="product row middle-xs" to="/product">
                    <div className="col-xs-4 end-xs">
                        <img className="product-logo" src={this.props.image} alt={this.props.name} />
                    </div>
                    <div className="col-xs-8">
                        <p className="product-title">{this.props.name}</p>
                        <p className="product-price">{`Hind: ${this.props.price} €`}</p>
                    </div>
                </Link>
            </div>
        );
    }
}
