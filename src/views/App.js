import React from 'react';
import { GlobalStyles } from '../assets/GlobalStyle';
import CreateCard from './CreateCard';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/theme';
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
