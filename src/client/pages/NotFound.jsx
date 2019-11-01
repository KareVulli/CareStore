/* eslint-disable quote-props */
import React from 'react';
import {Link} from 'react-router-dom';

export default class NotFound extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs center-xs">
                        <h2>
                            Jõudsid tundmatule teele :(
                        </h2>
                        <Link className="link-large" to="/">Mine tagasi avalehele</Link>
                    </div>
                </div>
            </div>
        );
    }
}
