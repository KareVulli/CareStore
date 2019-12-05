/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import SimpleCartItem from './SimpleCartItem';
import CartList from './CartList';

export default class PaymentsList extends React.Component {
    static propTypes = {
        carts: PropTypes.array.isRequired,
        loading: PropTypes.bool.isRequired
    };

    render() {
        let i = 0;
        const items = this.props.carts.map((item) => {
            i += 1;
            return (
                <div className="padding-bottom-5" key={i}>
                    <h3>
                        <span className="margin-right-2">Ostukorv</span>
                        <Moment format="DD.MM.YYYY HH:mm">{item.updatedAt}</Moment>
                        { item.total
                            && <small className="margin-left-4">{`Summa: ${item.total} €`}</small>}
                    </h3>
                    <CartList
                        loading={this.props.loading}
                        cart={item.items}
                        itemElement={SimpleCartItem}
                    />
                </div>

            );
        });
        return (
            <div className={`${this.props.loading ? 'loading' : ''}`}>
                {items}
            </div>
        );
    }
}
