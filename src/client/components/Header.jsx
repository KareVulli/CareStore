import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart, faUserCircle} from '@fortawesome/free-solid-svg-icons';

class Header extends React.Component {
    static propTypes = {
        user: PropTypes.object
    };

    static defaultProps = {
        user: null
    }

    isLoggedIn() {
        return this.props.user !== null;
    }

    render() {
        let accountArea;
        if (this.isLoggedIn()) {
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
                            <Link className="navbar-item" to="/">
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

const mapStateToProps = (state) => ({
    user: state.account.user
});

export default connect(mapStateToProps)(Header);
