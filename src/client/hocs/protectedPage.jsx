/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import withUser from './user';

export default (WrappedComponent) => {
    const Component = class extends React.Component {
        static propTypes = {
            isLoggedIn: PropTypes.bool.isRequired
        };

        render() {
            if (!this.props.isLoggedIn) {
                return <Redirect to="/" />;
            }
            return <WrappedComponent {...this.props} />;
        }
    };
    return withUser(Component);
};
