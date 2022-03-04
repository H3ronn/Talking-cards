import React from 'react';
import { GlobalStyles } from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { BrowserRouter } from 'react-router-dom';
import CardProvider from 'providers/CardProvider';
import { ErrorProvider } from 'hooks/useError';

const AppProviders = ({ children }) => {
  return (
    <BrowserRouter>
      <ErrorProvider>
        <ThemeProvider theme={theme}>
          <CardProvider>
            <GlobalStyles />
            {children}
          </CardProvider>
        </ThemeProvider>
      </ErrorProvider>
    </BrowserRouter>
  );
};

export default AppProviders;
