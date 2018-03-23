import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppContainer from './components/individual/AppContainer/AppContainer';

ReactDOM.render(<MuiThemeProvider>
                    <AppContainer/>
                </MuiThemeProvider>
            , document.getElementById('root'));

registerServiceWorker();
