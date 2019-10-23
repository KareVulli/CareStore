import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Input from '../components/Input';
import Button from '../components/Button';
import {login, FETCH_LOGIN} from '../actions/account';

class Login extends React.Component {
    static propTypes = {
        loginRequest: PropTypes.object,

        login: PropTypes.func.isRequired
    };

    static defaultProps = {
        loginRequest: null
    }

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(field, value) {
        this.setState({
            [field]: value
        });
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.login({
            email: this.state.email,
            password: this.state.password
        });
    }

    getError() {
        if (this.props.loginRequest && this.props.loginRequest.error) {
            if (this.props.loginRequest.error.status === 400) {
                return 'Vigane email või parool';
            }
            return this.props.loginRequest.error.message;
        }
        return false;
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs col-md-6 col-md-offset-3">
                        <h1>Logi sisse</h1>
                        <form onSubmit={this.onSubmit}>
                            <Input title="Email" name="email" type="email" initialValue={this.state.email} onChange={this.onChange} />
                            <Input title="Parool" name="password" type="password" initialValue={this.state.password} onChange={this.onChange} />
                            <div className="row middle-xs">
                                <div className="col-xs-12 center-xs col-sm-4 start-sm">
                                    <Button title="Logi sisse" type="submit" />
                                </div>
                                <div className="col-xs-12 center-xs col-sm-8 end-sm padding-y-2">
                                    <Link className="link" to="/signup">Pole kasutajat?</Link>
                                    <Link className="link" to="/login">Unustasin parooli...</Link>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs">
                                    {this.getError() ? <span className="error">{this.getError()}</span> : null}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    loginRequest: state.requests[FETCH_LOGIN]
});

const mapDispatchToProps = (dispatch) => ({
    login: (data) => dispatch(login(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
