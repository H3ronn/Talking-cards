import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cards: [],
  loading: true,
  selectedCard: null,
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCards: (state, action) => {
      state.cards = action.payload;
      state.loading = false;
    },
    addCard: (state, action) => {
      state.cards.push(action.payload);
    },
    deleteCard: (state, action) => {
      return state.cards((card) => card.id === action.payload);
    },
    setSelectedCard: (state, action) => {
      state.selectedCard = action.payload;
    },
  },
});

export const { setCards, addCard, deleteCard, setSelectedCard } = cardsSlice.actions;

export const selectCards = (state) => state.cards;

export default cardsSlice.reducer;
