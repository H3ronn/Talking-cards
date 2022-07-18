import React from 'react';
import { GlobalStyles } from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { BrowserRouter } from 'react-router-dom';
import { AlertProvider } from 'hooks/useAlert';

const AppProviders = ({ children }) => {
  return (
    <BrowserRouter>
      <AlertProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          {children}
        </ThemeProvider>
      </AlertProvider>
    </BrowserRouter>
  );
};

export default AppProviders;
