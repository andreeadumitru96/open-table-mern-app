import React, { Component } from 'react';

import Login from './Login/Login'

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  componentWillMount() {

  }
  render() {
    return (
        <Login/>
    );
  }
}

export default LoginContainer;