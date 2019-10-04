import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart, faUserCircle} from '@fortawesome/free-solid-svg-icons';

export default class Header extends React.Component {
    render() {
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
                            <Link className="navbar-item" to="/">
                                <FontAwesomeIcon className="navbar-icon" icon={faUserCircle} size="lg" />
                                Log in
                            </Link>
                            <Link className="navbar-item" to="/">
                                <FontAwesomeIcon className="navbar-icon" icon={faShoppingCart} size="lg" />
                                Shopping cart
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
