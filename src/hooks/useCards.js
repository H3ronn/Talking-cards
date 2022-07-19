import { useNavigate } from 'react-router-dom';
import { collection, addDoc, serverTimestamp, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { db, storage } from 'firestore';
import { addImageToStorage } from 'helpers/addImageToStorage';
import { ref, deleteObject } from 'firebase/storage';
import { useError } from 'hooks/useError';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/user/userSlice';
import { selectCards, setSelectedCard } from 'redux/cards/cardsSlice';

export const useCards = () => {
  const { cards } = useSelector(selectCards);
  const userId = useSelector(selectUser).uid;
  const dispatch = useDispatch();

  const { dispatchError } = useError();

  const collName = `cards-${userId}`;

  const navigate = useNavigate();

  const colRef = collection(db, collName); //if it doesn't exist it creates a new collection

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
      dispatch(setSelectedCard({ ...card, id: newDoc.id }));
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
    dispatch(setSelectedCard(cards.find((el) => el.id === id)));
    navigate('/edit');
  };

  const overwriteCard = async ({ id, localImgUrl, ...card }) => {
    if (localImgUrl) {
      const imageUrl = await addImageToStorage(card.caption, card.image);
      card.image = imageUrl;
    }
    const docRef = doc(db, collName, id);
    await updateDoc(docRef, card);
  };

  return {
    addCard,
    deleteCard,
    editCard,
    overwriteCard,
  };
};
