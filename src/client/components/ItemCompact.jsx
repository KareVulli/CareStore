import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default class ItemCompact extends React.Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    };

    render() {
        return (
            <div className="product-container col-xs-12 col-sm-4">
                <Link className="product row middle-xs" to={`/product/${this.props.id}`}>
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
