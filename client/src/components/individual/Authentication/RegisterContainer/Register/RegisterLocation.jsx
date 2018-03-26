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
                        ref={(inputValue) => {this.locationName = inputValue}}
                    />  
                </div>

                <div className="register__form-address">
                    <TextField
                        inputStyle={{color: 'white'}}
                        floatingLabelStyle={{color: 'white'}}
                        floatingLabelText="Address"
                        ref={(inputValue) => {this.address = inputValue}}
                    />
                </div>

                <div className="register__form-phone">
                    <TextField
                        inputStyle={{color: 'white'}}
                        floatingLabelStyle={{color: 'white'}}
                        floatingLabelText="Phone"
                        ref={(inputValue) => {this.firstName = inputValue}}
                    />
                </div>

                <div className="register__form-email">
                    <TextField
                        inputStyle={{color: 'white'}}
                        floatingLabelStyle={{color: 'white'}}
                        floatingLabelText="Email"
                        ref={(inputValue) => {this.email = inputValue}}
                    />
                </div>
                
                <div className="register__form-password">
                    <TextField
                        inputStyle={{color: 'white'}}
                        floatingLabelStyle={{color: 'white'}}
                        floatingLabelText="Password"
                        ref={(inputValue) => {this.password = inputValue}}
                    />
                </div>

                <div className="register__form-repeat-password">
                    <TextField
                        inputStyle={{color: 'white'}}
                        floatingLabelStyle={{color: 'white'}}
                        floatingLabelText="Repeat Password"
                        ref={(inputValue) => {this.repeatPassword = inputValue}}
                    />
                </div>

                <div className="register__form-sign-up-button">
                    <RaisedButton label="SIGN UP" onClick={this.props.onRegisterFormLocation}/>
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
