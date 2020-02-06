import React from 'react';

import Inicial from "./Pages/Inicial/Inicial";
import Doacoes from "./Pages/Doacoes.js/Doacoes";
import Main from './Pages/Main/Main'
import { ThemeProvider } from "@material-ui/core";

import { createMuiTheme } from '@material-ui/core/styles';

const palette = {
  primary: { main: '#EF5350' },
  secondary: { main: '#F44336' }
};

const theme = createMuiTheme({ palette });

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Inicial /> */}
      {/* <Doacoes /> */}
      <Main />
    </ThemeProvider>
  );
}

export default App;
