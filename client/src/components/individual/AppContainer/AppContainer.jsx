import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import App from './App/App';
import LoginContainer from '../Authentication/LoginContainer/LoginContainer';
import RegisterContainer from '../Authentication/RegisterContainer/RegisterContainer';
import NotFoundRoute from '../../shared/NotFoundRoute/NotFoundRoute';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
}

  render() {
    return (
        <App>
            <Router>
                <Switch>
                    <Route exact path='/' component={AppContainer} />
                    <Route exact path='/login' component={LoginContainer}/>
                    <Route exact path='/register' render={() => <RegisterContainer isCustomer={'true'} />}/>
                    <Route component={NotFoundRoute} />
                </Switch>
            </Router>
        </App>
    );
  }
}

export default AppContainer;