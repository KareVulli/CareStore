import React from 'react';
import {Link} from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';

export default class Login extends React.Component {
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
        console.log(this.state.email, this.state.password);
        event.preventDefault();
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
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
