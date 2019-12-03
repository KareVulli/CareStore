/* eslint-disable class-methods-use-this */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import {
    StripeProvider, Elements
} from 'react-stripe-elements';
import StripeForm from './StripeForm';

class Stripe extends React.Component {
    static propTypes = {
        sum: PropTypes.number.isRequired
    };

    render() {
        return (
            <StripeProvider apiKey="pk_test_VFKWgM96NQn2ylw4JNj6BXpD00t2dRTHpL">
                <Elements>
                    <StripeForm sum={this.props.sum} />
                </Elements>
            </StripeProvider>
        );
    }
}

export default Stripe;
