import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import Checkbox from '../components/Checkbox';


export default class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            tos: false
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
        console.log(this.state.email, this.state.password);
        event.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs col-md-6 col-md-offset-3">
                        <h1>Registeeru</h1>
                        <form onSubmit={this.onSubmit}>
                            <Input title="Eesnimi" name="firstname" type="text" initialValue={this.state.firstname} onChange={this.onChange} />
                            <Input title="Perekonnanimi" name="lastname" type="text" initialValue={this.state.lastname} onChange={this.onChange} />
                            <Input title="Email" name="email" type="email" initialValue={this.state.email} onChange={this.onChange} />
                            <Input title="Parool" name="password" type="password" initialValue={this.state.password} onChange={this.onChange} />
                            <Checkbox name="tos" text="Olen nõus meie TOS'idega" checked={this.state.tos} onChange={this.onTosChecked} />
                            <div className="row middle-xs">
                                <div className="col-xs-12 center-xs col-sm-4 start-sm">
                                    <Button title="Registeeru" type="submit" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
