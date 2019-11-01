/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

const mapStateToProps = (state) => ({
    user: state.account.user
});

export default (WrappedComponent) => {
    const Component = class extends React.Component {
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
            return <WrappedComponent {...this.props} />;
        }
    };
    return connect(mapStateToProps)(Component);
};
