import React, { useState } from 'react';
import { GlobalStyles } from 'assets/styles/GlobalStyle';
import CreateCard from './CreateCard';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import Navigation from 'components/organisms/Navigation/Navigation';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import CardList from './CardList';

const initialCardContext = [
  {
    caption: 'Caption',
    captionColor: '#ffffff',
    fontSize: 50,
    image: null,
    bgColor: '#0000ff',
    spaceValue: 0,
  },
  {
    caption: 'Jeść',
    captionColor: '#ffffff',
    fontSize: 30,
    image: null,
    bgColor: '#ff00ff',
    spaceValue: 10,
  },
  {
    caption: 'Toaleta',
    captionColor: '#ffff11',
    fontSize: 40,
    image: null,
    bgColor: '#00f0ff',
    spaceValue: 20,
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
            <Route path="/list" element={<CardList />} />
            <Route path="/create" element={<CreateCard />} />
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
