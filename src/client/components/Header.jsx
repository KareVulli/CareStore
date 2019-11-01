import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart, faUserCircle} from '@fortawesome/free-solid-svg-icons';
import withUser from '../hocs/user';

class Header extends React.Component {
    static propTypes = {
        user: PropTypes.object,
        isLoggedIn: PropTypes.bool.isRequired
    };

    static defaultProps = {
        user: null
    }

    render() {
        let accountArea;
        if (this.props.isLoggedIn) {
            accountArea = (
                <Link className="navbar-item" to="/profile">
                    <FontAwesomeIcon className="navbar-icon" icon={faUserCircle} size="lg" />
                    <span>{`Tere, ${this.props.user.firstname} ${this.props.user.lastname}`}</span>
                </Link>
            );
        } else {
            accountArea = (
                <Link className="navbar-item" to="/login">
                    <FontAwesomeIcon className="navbar-icon" icon={faUserCircle} size="lg" />
                    <span>Logi sisse</span>
                </Link>
            );
        }

        return (
            <div className="navbar-container">
                <div className="navbar">
                    <div className="row middle-xs">
                        <div className="col-xs-auto col-sm-6">
                            <Link to="/">
                                <img className="navbar-logo" src="/assets/images/CareCloud.png" alt="logo" />
                            </Link>
                        </div>
                        <div className="col-xs col-sm-6 end-xs">
                            {accountArea}
                            <Link className="navbar-item" to="/cart">
                                <FontAwesomeIcon className="navbar-icon" icon={faShoppingCart} size="lg" />
                                <span>Ostukorv</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default withUser(Header);
