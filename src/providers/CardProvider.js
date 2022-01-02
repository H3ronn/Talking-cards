import React, { useState, createContext } from 'react';

const initialCardContext = [
  {
    id: 1,
    caption: 'Spacer',
    captionColor: '#ffffff',
    fontSize: 50,
    image: null,
    bgColor: '#0000ff',
    spaceValue: 0,
  },
  {
    id: 2,
    caption: 'Jeść',
    captionColor: '#ffffff',
    fontSize: 30,
    image: null,
    bgColor: '#ff00ff',
    spaceValue: 10,
  },
  {
    id: 3,
    caption: 'Caption',
    captionColor: '#ffffff',
    fontSize: 50,
    image: null,
    bgColor: '#0000ff',
    spaceValue: 0,
  },
  {
    id: 4,
    caption: 'Jeść',
    captionColor: '#ffffff',
    fontSize: 30,
    image: null,
    bgColor: '#ff00ff',
    spaceValue: 10,
  },
  {
    id: 5,
    caption: 'Toaleta',
    captionColor: '#ffff11',
    fontSize: 40,
    image: null,
    bgColor: '#00f0ff',
    spaceValue: 20,
  },
];

export const CardContext = createContext({ cards: [], addCard: () => {}, deleteCard: () => {} });

const CardProvider = ({ children }) => {
  const [cards, setCards] = useState(initialCardContext);

  const addCard = (card) => {
    // setCards((prevState) => [...prevState, card]);
    setCards((prevState) => [
      ...prevState,
      {
        id: prevState[prevState.length - 1].id + 1,
        ...card,
      },
    ]);
  };
  const deleteCard = (id) => {
    setCards((prevState) => prevState.filter((el) => el.id !== id));
  };

  return <CardContext.Provider value={{ cards, addCard, deleteCard }}>{children}</CardContext.Provider>;
};

export default CardProvider;
