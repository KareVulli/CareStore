import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        onClick: PropTypes.func,
        type: PropTypes.oneOf(['button', 'submit', 'reset'])
    };

    static defaultProps = {
        type: 'button',
        onClick: undefined
    };

    render() {
        // eslint-disable-next-line react/button-has-type
        return <button className="btn btn-primary" type={this.props.type} onClick={this.props.onClick}>{this.props.title}</button>;
    }
}
