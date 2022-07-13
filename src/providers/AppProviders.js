import React from 'react';
import { GlobalStyles } from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { BrowserRouter } from 'react-router-dom';
import { ErrorProvider } from 'hooks/useError';
import { AlertProvider } from 'hooks/useAlert';

const AppProviders = ({ children }) => {
  return (
    <BrowserRouter>
      <ErrorProvider>
        <AlertProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            {children}
          </ThemeProvider>
        </AlertProvider>
      </ErrorProvider>
    </BrowserRouter>
  );
};

export default AppProviders;
