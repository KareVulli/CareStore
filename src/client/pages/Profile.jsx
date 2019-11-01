/* eslint-disable react/prop-types */
import React from 'react';
import Moment from 'react-moment';
import withProtectedPage from '../hocs/protectedPage';

class Profile extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs col-md-6 col-md-offset-3">
                        <h1>Sinu profiil</h1>
                        <dl>
                            <dt>Nimi:</dt>
                            <dd>{`${this.props.user.firstname} ${this.props.user.lastname}`}</dd>
                        </dl>
                        <dl>
                            <dt>E-post:</dt>
                            <dd>{this.props.user.email}</dd>
                        </dl>
                        <dl>
                            <dt>Loomise kuupäev:</dt>
                            <dd><Moment format="DD.MM.YYYY">{this.props.user.createdAt}</Moment></dd>
                        </dl>
                    </div>
                </div>
            </div>
        );
    }
}

export default withProtectedPage(Profile);
