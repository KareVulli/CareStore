/* eslint-disable quote-props */
import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import Checkbox from '../components/Checkbox';

class Signup extends React.Component {
    static propTypes = {
        /* match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired, */
        history: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            tos: false,
            loading: false,
            error: null
        };

        this.onChange = this.onChange.bind(this);
        this.onTosChecked = this.onTosChecked.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(field, value) {
        this.setState({
            [field]: value
        });
    }

    onTosChecked(e) {
        this.setState({
            tos: e.target.checked
        });
    }

    onSubmit(event) {
        event.preventDefault();
        if (this.state.loading) {
            return;
        }
        this.setState({
            loading: true,
            error: null
        });
        fetch('/api/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email: this.state.email,
                password: this.state.password
            })
        }).then((response) => {
            if (response.status !== 201) {
                throw new Error('Viga registeerimisel');
            }
            return response.json();
        }).then(() => {
            this.props.history.push('/signup/success');
            console.log('history push');
        }).catch((error) => {
            this.setState({
                loading: false,
                error: error.message
            });
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs col-md-6 col-md-offset-3">
                        <h1>Registeeru</h1>
                        <form onSubmit={this.onSubmit}>
                            {this.state.error ? <p className="error-message">{this.state.error}</p> : null}
                            <Input title="Eesnimi" name="firstname" type="text" initialValue={this.state.firstname} onChange={this.onChange} />
                            <Input title="Perekonnanimi" name="lastname" type="text" initialValue={this.state.lastname} onChange={this.onChange} />
                            <Input title="Email" name="email" type="email" initialValue={this.state.email} onChange={this.onChange} />
                            <Input title="Parool" name="password" type="password" initialValue={this.state.password} onChange={this.onChange} />
                            <Checkbox name="tos" text="Olen nõus meie TOS'idega" checked={this.state.tos} onChange={this.onTosChecked} />
                            <div className="row middle-xs">
                                <div className="col-xs-12 center-xs col-sm-4 start-sm">
                                    <Button title="Registeeru" type="submit" disabled={this.state.loading} />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Signup);
