import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        return (
            <div className="login">
                <form className="login__form">
                    <div className="login__form-p">
                        <p>LOG IN</p>
                    </div>
                    <div className="login__form-email">
                        <TextField  
                            inputStyle={{color: 'white'}}
                            floatingLabelStyle={{color: 'white'}}
                            floatingLabelText="Email"
                        />  
                    </div>

                    <div className="login__from-password">
                        <TextField
                            inputStyle={{color: 'white'}}
                            floatingLabelStyle={{color: 'white'}}
                            floatingLabelText="Password"
                            // type="password"
                        />
                    </div>

                    <div className="login__form-sign-in-button">
                        <RaisedButton label="LOG IN"/>
                    </div>

                    <div className="login__form-forgot-password">
                        <a className="login__form-forgot-password-anchor"> Forgot your password? </a>
                    </div>  
                    <div className="login__redirect-register">
                        <p> Don't you have an account? Register here </p>
                        <a className="login__redirect-register-customer" onClick={this.props.toRegister}> Customer </a>
                        <a className="login__redirect-register-owner" onClick={this.props.toRegister}> Location </a>      
                    </div>       
                    
                </form>
            </div>
        );
    }
}

export default Login;
