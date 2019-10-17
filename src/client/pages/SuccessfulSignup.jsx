/* eslint-disable quote-props */
import React from 'react';
import {Link} from 'react-router-dom';

export default class SuccessfulSignup extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs center-xs">
                        <p>
                            Oled edukalt registeeritud!
                            Palun kontrolli oma e-posti, et kinnitada oma kasutaja.
                        </p>
                        <Link className="link" to="/login">Logi sisse</Link>
                    </div>
                </div>
            </div>
        );
    }
}
