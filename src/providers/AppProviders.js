import React from 'react';
import { GlobalStyles } from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { BrowserRouter } from 'react-router-dom';
import { ErrorProvider } from 'hooks/useError';
import { AuthProvider } from 'hooks/useAuth';

const AppProviders = ({ children }) => {
  return (
    <BrowserRouter>
      <ErrorProvider>
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            {children}
          </ThemeProvider>
        </AuthProvider>
      </ErrorProvider>
    </BrowserRouter>
  );
};

export default AppProviders;
