import React, { Component } from 'react';

import Login from './Login/Login'

class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this._toRegister = this._toRegister.bind(this);
    }

    _toRegister(event) {
        let registerRole = event.target.textContent.includes('Customer');

        this.props.history.push({pathname: '/register',
            state: { isCustomer: registerRole, isLocation: !registerRole }});
    }

    componentWillMount() {

    }
    render() {
        return (
            <Login
                toRegister={this._toRegister} />
        );
    }
}

export default LoginContainer;