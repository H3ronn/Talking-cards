import React, { useState, createContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { getFirestore, collection, onSnapshot, addDoc, orderBy, serverTimestamp, query, doc, deleteDoc, updateDoc } from 'firebase/firestore';
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
const q = query(colRef, orderBy('createdAt'));
const storage = getStorage();

const CardProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  const navigate = useNavigate();

  const addCard = async (card) => {
    delete card.id;

    let newId;
    if (typeof card.image === 'object') {
      const storageRef = ref(storage, `${card.caption}-${uuid()}`);
      const snapshot = await uploadBytes(storageRef, card.image);
      const imageUrl = await getDownloadURL(snapshot.ref);
      const newDoc = await addDoc(colRef, { ...card, image: imageUrl, createdAt: serverTimestamp() });
      newId = newDoc.id;
    } else {
      const newDoc = await addDoc(colRef, { ...card, createdAt: serverTimestamp() });
      newId = newDoc.id;
    }
    setSelectedCard({ ...card, id: newId });

    // uploadBytes(storageRef, card.image).then((snapshot) => {
    //   getDownloadURL(snapshot.ref).then((imageUrl) => {
    //     console.log(imageUrl);
    //     addDoc(colRef, { ...card, image: imageUrl, createdAt: serverTimestamp() }).then((d) => {});
    //   });
    // });
  };

  const deleteCard = (id) => {
    const docRef = doc(db, 'cards', id);
    deleteDoc(docRef).then((data) => {});
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
    const docRef = doc(db, 'cards', card.id);
    updateDoc(docRef, card);
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
