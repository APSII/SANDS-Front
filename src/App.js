import React from 'react';

import Login from "./Pages/Login";
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
      <Login />
    </ThemeProvider>
  );
}

export default App;
