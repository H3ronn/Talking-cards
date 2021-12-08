import React from 'react';
import { GlobalStyles } from 'assets/styles/GlobalStyle';
import CreateCard from './CreateCard';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import Navigation from 'components/organisms/Navigation/Navigation';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navigation />
      <CreateCard />
    </ThemeProvider>
  );
};

export default App;
