import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <div className="navbar-container">
                <div className="navbar">
                    <div className="row middle-xs">
                        <div className="col-xs-auto col-sm-6">
                            <a href="index.html">
                                <img className="navbar-logo" src="assets/images/CareCloud.png" alt="logo" />
                            </a>
                        </div>
                        <div className="col-xs col-sm-6 end-xs">
                            <a className="navbar-item" href="#">Log in / Sign-up</a>
                            <a className="navbar-item" href="#">Ostukorv</a>
                        </div>
                    </div>
                </div>    
            </div>
        );
    }
}