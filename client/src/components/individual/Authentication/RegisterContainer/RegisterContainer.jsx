import React, { Component } from 'react';

import RegisterCustomer from './Register/RegisterCustomer';
import RegisterOwner from './Register/RegisterLocation';

class RegisterContainer extends Component {
    constructor(props) {
      
        super(props);
        this.state = {
            isCustomer: this.props.isCustomer ? true:false,
            isLocation: this.props.isLocation ? true:false
        };
        this._toLogin = this._toLogin.bind(this);
        this._onRegisterFormCustomer = this._onRegisterFormCustomer.bind(this);
        this._onRegisterFormLocation = this._onRegisterFormLocation.bind(this);

        this._sendCustomerInformation = this._sendCustomerInformation.bind(this);
        this._sendLocationInformation = this._sendLocationInformation.bind(this);
    }

    componentWillMount() {
        if (this.props.history.location.state) {
            this.setState({ 
                isCustomer: this.props.history.location.state.isCustomer, 
                isLocation: this.props.history.location.state.isLocation 
            })
        }
    }

    _toLogin() {
        this.props.history.push('/login');
    }
  
    _onRegisterFormCustomer() {
        let customerInformation = {
            firstName: this.customerChild.firstName.getValue(),
            lastName: this.customerChild.lastName.getValue(),
            email: this.customerChild.email.getValue(),
            password: this.customerChild.password.getValue(),
            fullName: `${this.customerChild.firstName.getValue()} ${this.customerChild.lastName.getValue()}`
        };
        this._sendCustomerInformation(customerInformation);
    }

    _onRegisterFormLocation() {
        let locationInformation = {
            locationName: this.locationChild.locationName.getValue(),
            address: this.locationChild.address.getValue(),
            phone: this.locationChild.address.getValue(),
            email: this.locationChild.email.getValue(),
            password: this.locationChild.password.getValue()
        }
        this._sendLocationInformation(locationInformation);

    }

    _sendLocationInformation(data) {
        fetch('http://localhost:3001/api/register/location', {
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
                    onRegisterFormCustomer={this._onRegisterFormCustomer}
                    ref={(childInstance) => {this.customerChild = childInstance}}
                />}
                {this.state.isLocation &&
                <RegisterOwner
                    toLogin={this._toLogin}
                    sendLocationInformation={this._sendLocationInformation}
                    onRegisterFormLocation={this._onRegisterFormLocation}
                    ref={(childInstance) => {this.locationChild = childInstance}}
                />}
            </div>
        );
    }

    componentWillReceiveProps(newProps) {
        this.setState({isCustomer: newProps.isCustomer, isLocation: newProps.isLocation});
    }   

}

export default RegisterContainer;