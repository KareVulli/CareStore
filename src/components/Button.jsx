import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        onClick: PropTypes.func,
        type: PropTypes.oneOf(['button', 'submit', 'reset']),
        disabled: PropTypes.bool
    };

    static defaultProps = {
        type: 'button',
        onClick: undefined,
        disabled: false
    };

    render() {
        // eslint-disable-next-line react/button-has-type
        return <button className="btn btn-primary" type={this.props.type} onClick={this.props.onClick} disabled={this.props.disabled}>{this.props.title}</button>;
    }
}