import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/dgp.css';
import '../src/styles/global.css';
import App from './App';
import Navigation from './components/Navigation';
import TemplateTheme from './components/theme';
import './index.css';
import Router from './Router';
import Acknowledgment from './components/Acknowledgment';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={TemplateTheme}>
      <Navigation />
      <Router />
      <Acknowledgment />
      <Footer />
    </ThemeProvider>
  </React.StrictMode>
);

