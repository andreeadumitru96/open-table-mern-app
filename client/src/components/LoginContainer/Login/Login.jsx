import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import('./Login.css');
class Login extends Component {
  render() {
    return (
      <div className="login">
        <form className="login__form">
            <div className="login__form-email">
                <TextField  floatingLabelText="Email"/>  
            </div>

            <div className="login__from-password">
                <TextField  floatingLabelText="Password"/>
            </div>

            <div className="login__form-sign-in-button">
                <RaisedButton label="LOG IN" primary={true} />
            </div>
            
                        
        </form>
      </div>
    );
  }
}

export default Login;
