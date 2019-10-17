import React from 'react';
import PropTypes from 'prop-types';

export default class Input extends React.Component {
    static counter = 0;

    static propTypes = {
        name: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        type: PropTypes.string.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            id: Input.counter,
            value: ''
        };
        Input.counter += 1;

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({
            value: e.target.value
        });
        this.props.onChange(this.props.name, e.target.value);
    }

    render() {
        return (
            <div className="form-control">
                <label htmlFor={`input-${this.state.id}`}>{ this.props.title }</label>
                <input
                    id={`input-${this.state.id}`}
                    type={this.props.type}
                    name={this.props.name}
                    value={this.state.value}
                    onChange={this.onChange}
                />
            </div>
        );
    }
}
