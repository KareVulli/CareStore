import React from 'react';
import PropTypes from 'prop-types';

export default class Input extends React.Component {
    static counter = 0;

    static propTypes = {
        name: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        onBlur: PropTypes.func,
        type: PropTypes.string.isRequired,
        error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
    };

    static defaultProps = {
        onBlur: null,
        error: null
    }

    constructor(props) {
        super(props);
        this.state = {
            id: Input.counter,
            value: ''
        };
        Input.counter += 1;

        this.onChange = this.onChange.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    onChange(e) {
        this.setState({
            value: e.target.value
        });
        this.props.onChange(this.props.name, e.target.value);
    }

    onBlur(e) {
        if (this.props.onBlur) {
            this.props.onBlur(this.props.name, e.target.value);
        }
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
                    onBlur={this.onBlur}
                />
                {
                    this.props.error
                        ? <span className="error">{this.props.error}</span>
                        : null
                }
            </div>
        );
    }
}
