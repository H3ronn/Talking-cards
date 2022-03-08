import React, { useState, createContext, useEffect, useMemo } from 'react';
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
import { useAuth } from 'hooks/useAuth';
import { db, storage } from 'firestore';
import { addImageToStorage } from 'helpers/addImageToStorage';
import { ref, deleteObject } from 'firebase/storage';
import { useError } from 'hooks/useError';

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
  loading: true,
  selectedCard: {},
  addCard: () => {},
  deleteCard: () => {},
});

const CardProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCard, setSelectedCard] = useState(null);

  const { userId } = useAuth();
  const { dispatchError } = useError();
  const collName = `cards-${userId}`;

  const navigate = useNavigate();

  const colRef = useMemo(() => collection(db, collName), [collName]); //if not exit it create new collection

  const addCard = async ({ localImgUrl, id, ...card }) => {
    // const card = { ...cardToSave };
    // delete card.id;
    // delete card.localImgUrl;
    try {
      if (card.image instanceof File) {
        const imageUrl = await addImageToStorage(card.caption, card.image);
        card.image = imageUrl;
      }
      const newDoc = await addDoc(colRef, {
        ...card,
        createdAt: serverTimestamp(),
      });
      setSelectedCard({ ...card, id: newDoc.id });
    } catch (error) {
      dispatchError('Failed to add a card. Try again or report the problem to us.');
    }
  };

  const deleteCard = (id, image) => {
    const docRef = doc(db, collName, id);
    deleteDoc(docRef)
      .then(() => {
        console.log('delete doc succes');
      })
      .catch((error) => {
        console.log('delete doc faild');
        console.log(error.code);
        dispatchError('Failed to delete a card. Try again or report the problem to us.');
      });

    const isImageUsed = cards.find((el) => el.id !== id && el.image === image);
    if (!isImageUsed) {
      const imageRef = ref(storage, image);
      deleteObject(imageRef)
        .then(() => {
          console.log('// File deleted successfully');
        })
        .catch((error) => {
          dispatchError('Failed to delete a card image. Try again or report the problem to us.');
        });
    }
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
      const savedCards = snapshot.docs.map((card) => {
        return {
          id: card.id,
          ...card.data(),
        };
      });
      setLoading(false);
      setCards(savedCards);
    });

    return () => subscribe();
  }, [userId, colRef]);

  // useEffect(() => {
  //   localStorage.setItem('cards', JSON.stringify(cards));
  // }, [cards]);

  return (
    <CardContext.Provider
      value={{
        cards,
        loading,
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
