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
  }
  componentWillMount() {

  }
  
  render() {
    return (
        <div>
            {this.state.isCustomer && <RegisterCustomer />}
            {this.state.isOwner && <RegisterOwner />}
        </div>
        
        

    );
  }

  componentWillReceiveProps(newProps) {
    this.setState({isCustomer: newProps.isCustomer, isOwner: newProps.isOwner});
} 

}

export default RegisterContainer;