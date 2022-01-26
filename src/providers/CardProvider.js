import React, { useState, createContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  collection,
  onSnapshot,
  addDoc,
  orderBy,
  serverTimestamp,
  query,
  doc,
  deleteDoc,
  updateDoc,
} from 'firebase/firestore';
import useAuth from 'hooks/useAuth';
import { db } from 'firestore';
import { addImageToStorage } from 'helpers/addImageToStorage';

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

// const initialCardContext = JSON.parse(localStorage.getItem('cards')) || [];

export const CardContext = createContext({
  cards: [],
  selectedCard: {},
  addCard: () => {},
  deleteCard: () => {},
});

const CardProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const { userId } = useAuth();
  const collName = `cards-${userId}`;

  const navigate = useNavigate();

  const colRef = collection(db, collName); //if not exit it create new collection

  const addCard = async ({ localImgUrl, id, ...card }) => {
    // const card = { ...cardToSave };
    // delete card.id;
    // delete card.localImgUrl;
    if (card.image instanceof File) {
      const imageUrl = await addImageToStorage(card.caption, card.image);
      card.image = imageUrl;
    }
    const newDoc = await addDoc(colRef, {
      ...card,
      createdAt: serverTimestamp(),
    });
    const newId = newDoc.id;
    setSelectedCard({ ...card, id: newId });
  };

  const deleteCard = (id) => {
    const docRef = doc(db, collName, id);
    deleteDoc(docRef).then(() => {});
    // idk how to correct delete images from storage
    // when is using by more than 2 cards
  };

  const editCard = (id) => {
    setSelectedCard(cards.find((el) => el.id === id));
    navigate('/edit');
  };

  const overwriteCard = (card) => {
    // deleteCard(card.id);
    // setCards((prevState) => [...prevState, card]);
    delete card.localImgUrl;
    const docRef = doc(db, collName, card.id);
    updateDoc(docRef, card);
  };

  useEffect(() => {
    const q = query(colRef, orderBy('createdAt'));

    const subscribe = onSnapshot(q, (snapshot) => {
      console.log('onSnapshot');
      const cards = snapshot.docs.map((card) => {
        return {
          id: card.id,
          ...card.data(),
        };
      });
      setCards(cards);
    });
    return () => subscribe();
  }, [userId]);

  // useEffect(() => {
  //   localStorage.setItem('cards', JSON.stringify(cards));
  // }, [cards]);

  return (
    <CardContext.Provider
      value={{
        cards,
        selectedCard,
        addCard,
        deleteCard,
        editCard,
        overwriteCard,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export default CardProvider;
