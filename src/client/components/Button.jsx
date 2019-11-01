import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
    static propTypes = {
        title: PropTypes.any.isRequired,
        onClick: PropTypes.func,
        type: PropTypes.oneOf(['primary', 'simple', 'simple-danger']),
        rule: PropTypes.oneOf(['button', 'submit', 'reset']),
        disabled: PropTypes.bool
    };

    static defaultProps = {
        rule: 'button',
        type: 'primary',
        onClick: undefined,
        disabled: false
    };

    render() {
        // eslint-disable-next-line react/button-has-type
        return <button className={`btn btn-${this.props.type}`} type={this.props.rule} onClick={this.props.onClick} disabled={this.props.disabled}>{this.props.title}</button>;
    }
}
