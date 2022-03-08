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

export const CardContext = createContext({
  cards: [],
  loading: true,
  selectedCard: {},
  addCard: () => {},
  deleteCard: () => {},
  editCard: () => {},
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
      return true;
    } catch (error) {
      dispatchError('Failed to add a card. Try again or report the problem to us.');
      return false;
    }
  };

  const deleteDocFromDb = (id) => {
    const docRef = doc(db, collName, id);
    deleteDoc(docRef);
  };

  const deleteImageFromStorage = (image) => {
    const imageRef = ref(storage, image);
    deleteObject(imageRef);
  };

  const deleteCard = (id, image) => {
    try {
      deleteDocFromDb(id);

      const isImageUsed = cards.find((el) => el.id !== id && el.image === image);
      if (!isImageUsed) {
        deleteImageFromStorage(image);
      }

      return true;
    } catch (e) {
      dispatchError('Failed to delete a card. Try again or report the problem to us.');
      return false;
    }
  };

  const editCard = (id) => {
    setSelectedCard(cards.find((el) => el.id === id));
    navigate('/edit');
  };

  const overwriteCard = async ({ id, localImgUrl, ...card }) => {
    if (localImgUrl) {
      const imageUrl = await addImageToStorage(card.caption, card.image);
      card.image = imageUrl;
    }
    const docRef = doc(db, collName, id);
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
