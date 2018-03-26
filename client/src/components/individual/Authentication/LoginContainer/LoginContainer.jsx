import React, { Component } from 'react';

import Login from './Login/Login'
import {notificationError} from '../../../shared/notification';

class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this._toRegister = this._toRegister.bind(this);
        this._onLogin = this._onLogin.bind(this);
        this._getUserInformation = this._getUserInformation.bind(this);
        this._redirectToHome = this._redirectToHome.bind(this);
    }

    _toRegister(event) {
        let registerRole = event.target.textContent.includes('Customer');

        this.props.history.push({pathname: '/register',
            state: { isCustomer: registerRole, isLocation: !registerRole }});
    }

    _redirectToHome() {
        this.props.history.push('/');
    }

    _getUserInformation() {
        let userCredentials = {
            email: this.child.email.getValue(),
            password: this.child.password.getValue()
        }
        this._onLogin(userCredentials);
    }

    _onLogin(userCredentials) {
        fetch('http://localhost:3001/api/login', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(userCredentials)
        }).then(function (response) {
            if(response.status === 200) {
				response.json().then((data) => {
					this._redirectToHome(data);
				})
			} else {
				response.json().then((data) => {
					notificationError(data.message);
				});
            }
        }.bind(this));

    }

    componentWillMount() {

    }
    render() {
        return (
            <Login
                toRegister={this._toRegister}
                onLogin={this._onLogin}
                redirectToHome={this._redirectToHome} 
                ref={(childInstance) => { this.child = childInstance; }}
            />
        );
    }
}

export default LoginContainer;