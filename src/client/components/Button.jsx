/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
    static propTypes = {
        title: PropTypes.any.isRequired,
        onClick: PropTypes.func,
        type: PropTypes.oneOf(['primary', 'danger', 'simple-primary', 'simple-danger']),
        rule: PropTypes.oneOf(['button', 'submit', 'reset']),
        size: PropTypes.oneOf([null, 'small', 'large', 'x-large']),
        disabled: PropTypes.bool
    };

    static defaultProps = {
        rule: 'button',
        type: 'primary',
        onClick: undefined,
        disabled: false,
        size: null
    };

    render() {
        let className = `btn btn-${this.props.type}`;
        if (this.props.size) {
            className += ` btn-${this.props.size}`;
        }
        return (
            <button
                className={className}
                type={this.props.rule}
                onClick={this.props.onClick}
                disabled={this.props.disabled}
            >
                {this.props.title}
            </button>
        );
    }
}
