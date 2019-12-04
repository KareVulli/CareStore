/* eslint-disable class-methods-use-this */
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {error} from 'react-toastify-redux';
import {
    CardElement, injectStripe
} from 'react-stripe-elements';
import Button from './Button';
import checkout from '../actions/cart';

class StripeForm extends React.Component {
    static propTypes = {
        stripe: PropTypes.object.isRequired,
        sum: PropTypes.number.isRequired,
        error: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        try {
            const token = this.props.stripe.createToken();
            console.log(token);
        } catch (err) {
            this.props.error(err.getMessage());
        }
    }

    render() {
        return (
            <form className="stripe-form" onSubmit={this.handleSubmit}>
                <p className="margin-top-0 margin-bottom-4">Palun sisestage oma pangakaardi andmed, et jätkata...</p>
                <CardElement
                    className="stripe-card margin-bottom-4"
                    style={{
                        base: {
                            color: '#ffffff',
                            fontFamily: "'Open Sans', sans-serif",
                            '::placeholder': {
                                color: '#aaaaaa'
                            },
                            ':focus': {
                                backgroundColor: '#0000ff88'
                            }
                        }

                    }}
                />
                <p className="margin-top-0 margin-bottom-4">
                    Summa:
                    <strong>{` ${this.props.sum} €`}</strong>
                </p>
                <div className="row">
                    <div className="col-xs end-xs">
                        <Button title="Kinnita makse" rule="submit" />
                    </div>
                </div>
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    error: (message) => dispatch(error(message)),
    checkout: (token) => dispatch(checkout(token))
});

export default injectStripe(connect(null, mapDispatchToProps)(StripeForm));
