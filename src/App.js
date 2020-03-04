import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';

import Inicial from './Pages/Inicial/Inicial';
import Doacoes from './Pages/Doacoes.js/Doacoes';
import Main from './Pages/Main/Main';

import './App.css';

const palette = {
  primary: { main: '#EF5350' },
  secondary: { main: '#F44336' },
};

const theme = createMuiTheme({ palette });

function App() {
  const isAuthenticated = localStorage.getItem('auth_token') !== null;
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={props => <Inicial {...props} page="login" />}
          />
          <Route path="/doacoes">
            {isAuthenticated ? <Doacoes /> : <Redirect to="/" />}
          </Route>
          <Route path="/unidade" component={Main}>
            {isAuthenticated ? <Main /> : <Redirect to="/" />}
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
