import React from 'react';
import { GlobalStyles } from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { BrowserRouter } from 'react-router-dom';

const AppProviders = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default AppProviders;
