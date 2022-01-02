import React, { useState, createContext } from 'react';

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

export const CardContext = createContext({ cards: [], addCard: () => {}, deleteCard: () => {} });

const CardProvider = ({ children }) => {
  const [cards, setCards] = useState(initialCardContext);

  const addCard = (card) => {
    setCards((prevState) => [...prevState, card]);
  };
  const deleteCard = () => {
    console.log('deleteCard');
  };

  return <CardContext.Provider value={{ cards, addCard, deleteCard }}>{children}</CardContext.Provider>;
};

export default CardProvider;
