import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/shared/AppContainer/AppContainer'
import LoginContainer from './components/shared/LoginContainer/LoginContainer';
import NotFoundRoute from './components/shared/NotFoundRoute/NotFoundRoute';

import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

ReactDOM.render(<MuiThemeProvider>
    <Router>
        <Switch>
            <Route exact path='/' component={AppContainer} />
            <Route exact path='/login' component={LoginContainer} />
            <Route component={NotFoundRoute} />
        </Switch>
    </Router>
</MuiThemeProvider>, 
document.getElementById('root'));

registerServiceWorker();
