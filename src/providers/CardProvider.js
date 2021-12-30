import React, { createContext } from 'react';

// const initialCardContext = [
//   {
//     caption: 'Caption',
//     captionColor: '#ffffff',
//     fontSize: 50,
//     selectedImage: null,
//     bgColor: '#0000ff',
//     spaceValue: 0,
//   },
// ];

const CardContext = createContext({ cards: [], addCard: () => {}, deleteCard: () => {} });

const addCard = (card) => {};
