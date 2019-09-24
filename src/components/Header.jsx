import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return (
            <div className="navbar-container">
                <div className="navbar">
                    <div className="row middle-xs">
                        <div className="col-xs-auto col-sm-6">
                            <Link to="/">
                                <img className="navbar-logo" src="assets/images/CareCloud.png" alt="logo" />
                            </Link>
                        </div>
                        <div className="col-xs col-sm-6 end-xs">
                            <Link className="navbar-item" to="/">Log in / Sign-up</Link>
                            <Link className="navbar-item" to="/">Ostukorv</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
