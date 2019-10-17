import React from 'react';
import PropTypes from 'prop-types';

export default class Checkbox extends React.Component {
    static counter = 0;

    static propTypes = {
        name: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        checked: PropTypes.bool.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            id: Checkbox.counter
        };
        Checkbox.counter += 1;
    }

    render() {
        return (
            <div className="checkbox">
                <input id={this.state.id} type="checkbox" name={this.props.name} checked={this.props.checked} onChange={this.props.onChange} />
                <label htmlFor={this.state.id}>{ this.props.text }</label>
            </div>
        );
    }
}
