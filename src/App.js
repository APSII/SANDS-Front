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
import Doacoes from './Pages/Doacoes/Doacoes';
import Main from './Pages/Main/Main';
import Usuarios from './Pages/Usuarios/Usuarios';

import './App.css';

const palette = {
  primary: { main: '#EF5350' },
  secondary: { main: '#F44336' },
};

const theme = createMuiTheme({ palette });

const isAuthenticated = () => localStorage.getItem('auth_token') !== null;
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <PrivateRoute path="/unidade" component={Main} />
          <PrivateRoute path="/usuarios" component={Usuarios} />
          <PrivateRoute path="/doacoes" component={Doacoes} />
          <Route path="/" exact component={Inicial} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
);

export default App;
