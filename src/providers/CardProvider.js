import React, { useState, createContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

// const initialCardContext = [
//   {
//     id: 1,
//     caption: 'Spacer',
//     captionColor: '#ffffff',
//     fontSize: 50,
//     image: null,
//     bgColor: '#0000ff',
//     spaceValue: 0,
//   },
//   {
//     id: 2,
//     caption: 'Jeść',
//     captionColor: '#ffffff',
//     fontSize: 30,
//     image: null,
//     bgColor: '#ff00ff',
//     spaceValue: 10,
//   },
//   {
//     id: 3,
//     caption: 'Caption',
//     captionColor: '#ffffff',
//     fontSize: 50,
//     image: null,
//     bgColor: '#0000ff',
//     spaceValue: 0,
//   },
//   {
//     id: 4,
//     caption: 'Jeść',
//     captionColor: '#ffffff',
//     fontSize: 30,
//     image: null,
//     bgColor: '#ff00ff',
//     spaceValue: 10,
//   },
//   {
//     id: 5,
//     caption: 'Toaleta',
//     captionColor: '#ffff11',
//     fontSize: 40,
//     image: null,
//     bgColor: '#00f0ff',
//     spaceValue: 20,
//   },
// ];

const initialCardContext = JSON.parse(localStorage.getItem('cards')) || [];

export const CardContext = createContext({ cards: [], selectedCard: {}, addCard: () => {}, deleteCard: () => {} });

const CardProvider = ({ children }) => {
  const [cards, setCards] = useState(initialCardContext);
  const [selectedCard, setSelectedCard] = useState(null);

  const navigate = useNavigate();

  const addCard = (card) => {
    setCards((prevState) => [
      ...prevState,
      {
        ...card,
        id: uuid(),
      },
    ]);
  };

  const deleteCard = (id) => {
    setCards((prevState) => prevState.filter((el) => el.id !== id));
  };

  const editCard = (id) => {
    setSelectedCard(cards.find((el) => el.id === id));
    // return <Navigate to="create" />;
    navigate('/edit');
  };

  const overwriteCard = (card) => {
    deleteCard(card.id);
    setCards((prevState) => [...prevState, card]);
  };

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards));
  }, [cards]);

  return <CardContext.Provider value={{ cards, selectedCard, addCard, deleteCard, editCard, overwriteCard }}>{children}</CardContext.Provider>;
};

export default CardProvider;
