import { createGlobalStyle } from 'styled-components';

/* @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap'); */
export const GlobalStyles = createGlobalStyle`


  html {
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;

  }

  a, button {
    font-family: 'Montserrat', sans-serif;
  }
`;
