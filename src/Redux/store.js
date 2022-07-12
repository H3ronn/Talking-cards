import { configureStore, createSlice } from '@reduxjs/toolkit';
import userSlice from './user/userSlice';
// import { collection, getDocs } from 'firebase/firestore';
// import { db } from 'firestore';
// import { useAuth } from 'hooks/useAuth';

// const { createSlice, configureStore, createAsyncThunk } = require('@reduxjs/toolkit');

// export const fetchCards = createAsyncThunk('posts/fetchCards', async () => {
//   const { userId } = useAuth();
//   const collName = `cards-${userId}`;
//   const querySnapshot = await getDocs(collection(db, collName));
//   querySnapshot.map((doc) => {
//     // doc.data() is never undefined for query doc snapshots
//     console.log(doc.id, ' => ', doc.data());
//     return { ...doc.data(), id: doc.id };
//   });
//   console.log(querySnapshot);
//   return querySnapshot;
// });

const cardsSlice = createSlice({
  name: 'cards',
  initialState: [],
  reducers: {
    getCards(state, action) {},
    addCard(state, action) {
      console.log(action);
    },
    deleteCard(state, action) {},
    editCard(state, action) {},
  },
});

export const { getCards, addCard, deleteCard, editCard } = cardsSlice.actions;

export const store = configureStore({
  reducer: { cards: cardsSlice.reducer, user: userSlice },
});
