import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserCircle} from '@fortawesome/free-solid-svg-icons';
import withUser from '../hocs/user';
import Badge from './Badge';
import {getCart} from '../selectors';

class Header extends React.Component {
    static propTypes = {
        user: PropTypes.object,
        cart: PropTypes.array.isRequired,
        isLoggedIn: PropTypes.bool.isRequired
    };

    static defaultProps = {
        user: null
    }

    render() {
        let accountArea;
        if (this.props.isLoggedIn) {
            accountArea = (
                <Link className="navbar-item col-xs end-xs" to="/profile">
                    <FontAwesomeIcon className="navbar-icon" icon={faUserCircle} size="2x" />
                    <span>{`Tere, ${this.props.user.firstname} ${this.props.user.lastname}`}</span>
                </Link>
            );
        } else {
            accountArea = (
                <Link className="navbar-item col-xs end-xs" to="/login">
                    <FontAwesomeIcon className="navbar-icon" icon={faUserCircle} size="2x" />
                    <span>Logi sisse</span>
                </Link>
            );
        }

        return (
            <div className="navbar-container">
                <div className="navbar container">
                    <div className="row middle-xs">
                        <div className="col-xs-auto col-sm-6">
                            <Link to="/">
                                <img className="navbar-logo" src="/assets/images/CareCloud.png" alt="logo" />
                            </Link>
                        </div>
                        {accountArea}
                        <Link className="navbar-item" to="/cart">
                            <Badge
                                count={this.props.cart.reduce(
                                    (acc, item) => acc + item.quantity, 0
                                )}
                            />
                            <span>Ostukorv</span>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    cart: getCart(state)
});

export default withUser(connect(mapStateToProps)(Header));
