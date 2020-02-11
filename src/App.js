import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from '@material-ui/core/styles';

import Inicial from "./Pages/Inicial/Inicial";
import Doacoes from "./Pages/Doacoes.js/Doacoes";
import Main from './Pages/Main/Main'

const palette = {
  primary: { main: '#EF5350' },
  secondary: { main: '#F44336' }
};

const theme = createMuiTheme({ palette });

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path='/' exact render={(props)=><Inicial {...props} page='login' />} />
          <Route path='/doacoes' component={Doacoes} />
          <Route path='/unidade' component={Main} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
