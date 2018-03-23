import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import './Register.css';

class RegisterOwner extends Component {
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
                    <p>Discover your customers</p>
                </div>

                <div className="register__form-location-name">
                    <TextField
                        inputStyle={{color: 'white'}}
                        floatingLabelStyle={{color: 'white'}}
                        floatingLabelText="Location Name"
                    />  
                </div>

                <div className="register__form-address">
                    <TextField
                        inputStyle={{color: 'white'}}
                        floatingLabelStyle={{color: 'white'}}
                        floatingLabelText="Address"
                    />
                </div>

                <div className="register__form-phone">
                    <TextField
                        inputStyle={{color: 'white'}}
                        floatingLabelStyle={{color: 'white'}}
                        floatingLabelText="Phone"
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
                    <a className="login__form-forgot-password-anchor" onClick={this.props.toLogin}> I already have an account </a>
                </div>
            </form>
        </div>
    );
  }
}

export default RegisterOwner;
