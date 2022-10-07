import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import '@splidejs/react-splide/css';

const theme = createTheme({
  shape: {
    borderRadius: '20px',
    border: '2px',
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#971921',
      dark: '#f76443',
    },
    secondary: {
      main: '#FFF',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
