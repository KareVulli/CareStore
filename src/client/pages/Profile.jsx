import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Moment from 'react-moment';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import withProtectedPage from '../hocs/protectedPage';
import Button from '../components/Button';
import {logout} from '../actions/account';
import {getPastPayments} from '../selectors';
import {fetchPastPayments} from '../actions/cart';
import PaymentsList from '../components/PaymentsList';

class Profile extends React.Component {
    static propTypes = {
        user: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired,
        loadPastPayments: PropTypes.func.isRequired,
        pastPayments: PropTypes.array.isRequired
    };

    constructor(props) {
        super(props);
        this.onLogout = this.onLogout.bind(this);
    }

    componentDidMount() {
        this.props.loadPastPayments();
    }

    onLogout() {
        this.props.logout();
    }

    render() {
        const logoutButton = (
            <span>
                Logi välja
                <FontAwesomeIcon className="margin-left-2" icon={faSignOutAlt} size="lg" />
            </span>
        );
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs col-md-10 col-md-offset-1">
                        <div className="card">
                            <div className="row">
                                <div className="col-xs">
                                    <h1>Sinu profiil</h1>
                                    <p>
                                        <strong>Nimi: </strong>
                                        <span>{`${this.props.user.firstname} ${this.props.user.lastname}`}</span>
                                    </p>
                                    <p>
                                        <strong>E-post: </strong>
                                        <span>{this.props.user.email}</span>
                                    </p>
                                    <p>
                                        <strong>Loomise kuupäev: </strong>
                                        <span><Moment format="DD.MM.YYYY">{this.props.user.createdAt}</Moment></span>
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs end-xs">
                                    <Button title={logoutButton} size="large" onClick={this.onLogout} />
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="row">
                                <div className="col-xs">
                                    <h1>Sinu ostud</h1>
                                    <PaymentsList loading={false} carts={this.props.pastPayments} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    pastPayments: getPastPayments(state)
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    loadPastPayments: () => dispatch(fetchPastPayments())
});

export default withProtectedPage(connect(mapStateToProps, mapDispatchToProps)(Profile));
