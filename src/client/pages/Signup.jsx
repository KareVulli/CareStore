/* eslint-disable quote-props */
import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Input from '../components/Input';
import Button from '../components/Button';
import Checkbox from '../components/Checkbox';
import {
    register, checkEmail
} from '../actions/account';
import {isEmailUnique, isRegisterLoading, getRegisterError} from '../selectors';

class Signup extends React.Component {
    static propTypes = {
        emailUnique: PropTypes.bool.isRequired,
        loading: PropTypes.bool.isRequired,
        error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]).isRequired,

        checkEmail: PropTypes.func.isRequired,
        register: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            tos: false,
            tosError: null
        };

        this.onChange = this.onChange.bind(this);
        this.onTosChecked = this.onTosChecked.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onEmailBlur = this.onEmailBlur.bind(this);
    }

    onChange(field, value) {
        this.setState({
            [field]: value
        });
    }

    onEmailBlur(field, value) {
        this.props.checkEmail(value);
    }

    onTosChecked(e) {
        this.setState({
            tos: e.target.checked,
            tosError: null
        });
    }

    onSubmit(event) {
        console.log('onSubmit()');
        event.preventDefault();
        if (!this.state.tos) {
            this.setState({
                tosError: 'Palun nõustu kasutajatimgimustega'
            });
            return;
        }
        if (this.props.loading || this.props.emailUnique !== true) {
            return;
        }
        this.props.register({
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password
        });
    }

    getValidationError(field) {
        if (
            this.props.error
            && this.props.error.response
            && this.props.error.response.errors
        ) {
            return this.props.error.response.errors[field] || false;
        }
        return false;
    }

    getError() {
        if (this.props.error) {
            if (this.props.error.status === 422) {
                return 'Palun kontrolli sisestatud väärtusi';
            }
            return this.props.error.message;
        }
        return false;
    }

    isLoading() {
        return this.props.loading;
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs col-md-6 col-md-offset-3">
                        <h1>Registeeru</h1>
                        <form onSubmit={this.onSubmit}>
                            {this.state.error ? <p className="error-message">{this.state.error}</p> : null}
                            <Input title="Eesnimi" name="firstname" type="text" initialValue={this.state.firstname} onChange={this.onChange} error={this.getValidationError('firstname')} />
                            <Input title="Perekonnanimi" name="lastname" type="text" initialValue={this.state.lastname} onChange={this.onChange} error={this.getValidationError('lastname')} />
                            <Input title="Email" name="email" type="email" initialValue={this.state.email} onChange={this.onChange} onBlur={this.onEmailBlur} error={this.props.emailUnique === false ? 'Email on juba kasutusel' : this.getValidationError('email')} />
                            <Input title="Parool" name="password" type="password" initialValue={this.state.password} onChange={this.onChange} error={this.getValidationError('password')} />
                            <Checkbox name="tos" text="Olen nõus meie TOS'idega" checked={this.state.tos} onChange={this.onTosChecked} error={this.state.tosError} />
                            <div className="row middle-xs">
                                <div className="col-xs-12 col-sm-12 start-sm">
                                    <Button title="Registeeru" rule="submit" disabled={this.isLoading()} />
                                    {this.isLoading() ? <span className="margin-left-2">Laadimine...</span> : null}
                                    {this.getError() ? <span className="margin-left-2 error">{this.getError()}</span> : null}
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
    emailUnique: isEmailUnique(state),
    loading: isRegisterLoading(state),
    error: getRegisterError(state)
});

const mapDispatchToProps = (dispatch) => ({
    checkEmail: (email) => dispatch(checkEmail(email)),
    register: (data) => dispatch(register(data))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Signup));
