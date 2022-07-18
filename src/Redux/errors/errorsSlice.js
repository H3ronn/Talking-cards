import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  error: '',
  timerId: '',
};

const errorsSlice = createSlice({
  name: 'errors',
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
      // state.timerId = setTimeout(() => {
      //   state.error = '';
      // }, 5500);
    },
    setErrorId: (state, action) => {
      state.timerId = action.payload;
    },
  },
});

export const { setError, setErrorId } = errorsSlice.actions;

export const selectError = (state) => state.errors;

export default errorsSlice.reducer;
