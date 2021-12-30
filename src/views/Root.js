import React, { useState } from 'react';
import { GlobalStyles } from 'assets/styles/GlobalStyle';
import CreateCard from './CreateCard';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import Navigation from 'components/organisms/Navigation/Navigation';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

const initialCardContext = [
  {
    caption: 'Caption',
    captionColor: '#ffffff',
    fontSize: 50,
    selectedImage: null,
    bgColor: '#0000ff',
    spaceValue: 0,
  },
];

export const CardContext = React.createContext({ cards: [], addCard: () => {}, deleteCard: () => {} });

const Root = () => {
  const [cards, setCards] = useState(initialCardContext);

  const addCard = (card) => {
    setCards((prevState) => [...prevState, card]);
  };
  const deleteCard = () => {
    console.log('deleteCard');
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CardContext.Provider
          value={{
            cards,
            addCard,
            deleteCard,
          }}
        >
          <GlobalStyles />
          <Navigation />
          <Routes>
            <Route path="/" element={<Navigate to="create" />} />
            <Route path="/create" element={<CreateCard />} />
            <Route path="/list" element={<h1>list</h1>} />
            <Route path="/faq" element={<h1>faq</h1>} />
            <Route path="/help" element={<h1>help</h1>} />
            <Route path="/login" element={<h1>login/register</h1>} />
          </Routes>
        </CardContext.Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Root;
