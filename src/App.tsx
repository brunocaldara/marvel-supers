import React from 'react';
import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';
import NavBar from './components/Navbar';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
    </ThemeProvider>
  );
}

export default App;
