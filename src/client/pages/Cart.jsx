/* eslint-disable quote-props */
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import CartList from '../components/CartList';
import Button from '../components/Button';

class Cart extends React.Component {
    static propTypes = {
        products: PropTypes.array.isRequired
    };

    render() {
        const total = this.props.products.reduce(
            (acc, item) => acc + (item.price * item.quantity), 0
        );
        const count = this.props.products.reduce((acc, product) => acc + product.quantity, 0);
        return (
            <div className="container">
                <div className="row middle-xs">
                    <div className="col-xs">
                        <h1>Ostukorv</h1>
                    </div>
                    <div className="col-xs end-xs">
                        <p>
                            {`Ostukorvis tooteid: ${count}`}
                        </p>
                    </div>
                </div>
                <div className="row middle-xs">
                    <div className="col-xs-12 col-sm">
                        <CartList items={this.props.products} loading={false} />
                    </div>
                </div>
                <div className="row middle-xs">
                    <div className="col-xs-9 col-sm-10 end-xs margin-top-4">
                        <p><strong>Vahesumma:</strong></p>
                        <p><strong>Käibemaks:</strong></p>
                        <p><strong>Kokku:</strong></p>
                    </div>
                    <div className="col-xs-3 col-sm-2 end-xs margin-top-4">
                        <p><strong>{`${(total * 0.8).toFixed(2)} €`}</strong></p>
                        <p><strong>{`${(total * 0.2).toFixed(2)} €`}</strong></p>
                        <p><strong>{`${total.toFixed(2)} €`}</strong></p>
                    </div>
                </div>
                <div className="row middle-xs">
                    <div className="col-xs-12 end-xs margin-top-4">
                        <Button title="Kinnita ost" />
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    products: state.cart.products
});


export default connect(mapStateToProps)(Cart);
