import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#fff'
        },
        secondary: {
            main: '#777'
        },
        type: 'dark'
    },
})


ReactDOM.render(<MuiThemeProvider theme={theme}><App /></MuiThemeProvider>, document.getElementById('root'));
