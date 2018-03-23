import React, { Component } from 'react';

import RegisterCustomer from './Register/RegisterCustomer';
import RegisterOwner from './Register/RegisterOwner';

class RegisterContainer extends Component {
    constructor(props) {
      
        super(props);
        this.state = {
            isCustomer: this.props.isCustomer ? true:false,
            isOwner: this.props.isOwner ? true:false
        };
        this._toLogin = this._toLogin.bind(this);
        this.__onRegisterForm = this._onRegisterForm.bind(this);
        this._sendCustomerInformation = this._sendCustomerInformation.bind(this);
    }

    componentWillMount() {

    }

    _toLogin() {
        this.props.history.push('/login');
    }
  
    _onRegisterForm() {
        let customerInformation = {
            firstName: this.child.firstName.getValue(),
            lastName: this.child.lastName.getValue(),
            email: this.child.email.getValue(),
            password: this.child.password.getValue(),
            repeatPassword: this.child.repeatPassword.getValue(),
            fullName: `${this.child.firstName.getValue()} ${this.child.lastName.getValue()}`
        };
        this._sendCustomerInformation(customerInformation);
    }

    _sendCustomerInformation(data) {
        fetch('http://localhost:3001/api/register/customer', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(data)
        }).then(function (response) {
            return response.json()
            console.log(response)
        }).then(function (body) {
            console.log(body);
        });
    }

    render() {
        return (
            <div>
                {this.state.isCustomer && 
                <RegisterCustomer 
                    toLogin={this._toLogin}
                    sendCustomerInformation={this._sendCustomerInformation}
                    onRegisterForm={this.__onRegisterForm}
                    ref={(childInstance) => {this.child = childInstance}}
                />}
                {this.state.isOwner &&
                <RegisterOwner
                    toLogin={this._toLogin}
                />}
            </div>
        );
    }

    componentWillReceiveProps(newProps) {
        this.setState({isCustomer: newProps.isCustomer, isOwner: newProps.isOwner});
    }   

}

export default RegisterContainer;