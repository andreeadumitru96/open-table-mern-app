import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvieder from 'material-ui/styles/MuiThemeProvider';
ReactDOM.render(<MuiThemeProvieder><App /></MuiThemeProvieder>, document.getElementById('root'));

registerServiceWorker();
