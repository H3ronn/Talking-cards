import React, { useState, createContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { getFirestore, collection, onSnapshot, addDoc, orderBy, serverTimestamp, query } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

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

export const CardContext = createContext({ cards: [], selectedCard: {}, addCard: () => {}, deleteCard: () => {} });
const db = getFirestore();
const colRef = collection(db, 'cards'); //if not exit it create new collection
const q = query(colRef, orderBy('createdAt', 'desc'));
const storage = getStorage();

const CardProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  const navigate = useNavigate();

  const addCard = (card) => {
    const storageRef = ref(storage, `${card.caption}-${uuid()}`);
    uploadBytes(storageRef, card.image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((imageUrl) => {
        addDoc(colRef, { ...card, image: imageUrl, createdAt: serverTimestamp() }).then((d) => {});
      });
    });
  };

  const deleteCard = (id) => {
    setCards((prevState) => prevState.filter((el) => el.id !== id));
  };

  const editCard = (id) => {
    setSelectedCard(cards.find((el) => el.id === id));
    navigate('/edit');
  };

  const overwriteCard = (card) => {
    deleteCard(card.id);
    setCards((prevState) => [...prevState, card]);
  };

  useEffect(() => {
    const subscribe = onSnapshot(q, (snapshot) => {
      const cards = snapshot.docs.map((card) => ({ id: card.id, ...card.data() }));
      setCards(cards);
    });
    return () => subscribe();
  }, []);

  // useEffect(() => {
  //   localStorage.setItem('cards', JSON.stringify(cards));
  // }, [cards]);

  return <CardContext.Provider value={{ cards, selectedCard, addCard, deleteCard, editCard, overwriteCard }}>{children}</CardContext.Provider>;
};

export default CardProvider;
