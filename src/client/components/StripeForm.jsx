/* eslint-disable class-methods-use-this */
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {error} from 'react-toastify-redux';
import {
    CardElement, injectStripe
} from 'react-stripe-elements';
import Button from './Button';
import {checkout} from '../actions/cart';
import {isCheckoutLoading} from '../selectors';

class StripeForm extends React.Component {
    static propTypes = {
        stripe: PropTypes.object.isRequired,
        sum: PropTypes.number.isRequired,
        checkout: PropTypes.func.isRequired,
        loading: PropTypes.bool.isRequired,
        error: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            stripeLoading: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(e) {
        e.preventDefault();
        if (this.state.stripeLoading || this.props.loading) {
            return;
        }
        this.setState({
            stripeLoading: true
        });
        const result = await this.props.stripe.createToken();
        if (result.error) {
            this.props.error(result.error.message);
        } else {
            this.props.checkout(result.token.id);
        }
        this.setState({
            stripeLoading: false
        });
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
                        {this.state.stripeLoading || this.props.loading ? <span className="margin-right-2">Laadimine...</span> : null}
                        <Button title="Kinnita makse" rule="submit" />
                    </div>
                </div>
            </form>
        );
    }
}

const mapStateToProps = (state) => ({
    loading: isCheckoutLoading(state)
});

const mapDispatchToProps = (dispatch) => ({
    error: (message) => dispatch(error(message)),
    checkout: (token) => dispatch(checkout(token))
});

export default injectStripe(connect(mapStateToProps, mapDispatchToProps)(StripeForm));
