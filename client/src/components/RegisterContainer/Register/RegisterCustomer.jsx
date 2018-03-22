import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class RegisterCustomer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div className="register">
                <form className="register__form">
                    <div className="register__form-p">
                        <p>Discover your tastes</p>
                    </div>
                    <div className="register__form-first-name">
                        <TextField  
                            floatingLabelText="First Name"
                        />  
                    </div>

                    <div className="register__form-last-name">
                        <TextField
                            floatingLabelText="Last Name"
                        />
                    </div>

                    <div className="register__form-email">
                        <TextField
                            floatingLabelText="Email"
                        />
                    </div>

                    <div className="register__form-password">
                        <TextField
                            floatingLabelText="Password"
                        />
                    </div>

                    <div className="register__form-repeat-password">
                        <TextField
                            floatingLabelText="Repeat Password"
                        />
                    </div>

                    <div className="register__form-sign-up-button">
                        <RaisedButton label="SIGN IN"/>
                    </div>

                    <div className="register__form-forgot-password">
                        <a href="" className="login__form-forgot-password-anchor"> I've already have an account </a>
                    </div>
                </form>
            </div>
        );
    }
}

export default RegisterCustomer;
