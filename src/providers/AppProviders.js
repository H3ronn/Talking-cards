import React from 'react';
import 'firestore';
import { GlobalStyles } from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import Navigation from 'components/organisms/Navigation/Navigation';
import { BrowserRouter } from 'react-router-dom';
import CardProvider from 'providers/CardProvider';

const AppProviders = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CardProvider>
          <GlobalStyles />
          <Navigation />
          {children}
        </CardProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default AppProviders;
