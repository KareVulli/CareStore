import React from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Moment from 'react-moment';

class Profile extends React.Component {
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
        if (!this.isLoggedIn()) {
            return <Redirect to="/login" />;
        }

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

const mapStateToProps = (state) => ({
    user: state.account.user
});

export default connect(mapStateToProps)(Profile);
