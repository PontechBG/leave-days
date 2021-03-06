import './index.css';
import 'react-datepicker/dist/react-datepicker.css';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import customTheme from './theme';
import MainPage from './components/MainPage';

const theme = createMuiTheme(customTheme);

document.title = 'Молба за отпуск';

ReactDOM.render(
  <div>
    <MuiThemeProvider theme={theme}>
      <MainPage />
    </MuiThemeProvider>
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
