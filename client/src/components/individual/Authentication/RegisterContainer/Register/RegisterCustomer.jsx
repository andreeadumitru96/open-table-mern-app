import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import './Register.css';

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
                            inputStyle={{color: 'white'}}
                            floatingLabelStyle={{color: 'white'}}
                            floatingLabelText="First Name"
                        />  
                    </div>

                    <div className="register__form-last-name">
                        <TextField
                            inputStyle={{color: 'white'}}
                            floatingLabelStyle={{color: 'white'}}
                            floatingLabelText="Last Name"
                        />
                    </div>

                    <div className="register__form-email">
                        <TextField
                            inputStyle={{color: 'white'}}
                            floatingLabelStyle={{color: 'white'}}
                            floatingLabelText="Email"
                        />
                    </div>

                    <div className="register__form-password">
                        <TextField
                            inputStyle={{color: 'white'}}
                            floatingLabelStyle={{color: 'white'}}
                            floatingLabelText="Password"
                        />
                    </div>

                    <div className="register__form-repeat-password">
                        <TextField
                            inputStyle={{color: 'white'}}
                            floatingLabelStyle={{color: 'white'}}
                            floatingLabelText="Repeat Password"
                        />
                    </div>

                    <div className="register__form-sign-up-button">
                        <RaisedButton label="SIGN UP"/>
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
