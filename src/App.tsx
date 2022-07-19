import React from 'react';
import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';
import NavBar from './components/Navbar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
