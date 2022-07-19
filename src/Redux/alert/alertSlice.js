import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: '',
  type: 'success',
  timerId: '',
};

const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    setAlert: (state, action) => {
      state.message = action.payload.message;
      state.type = action.payload.type;
    },
    setAlertId: (state, action) => {
      state.timerId = action.payload;
    },
  },
});

export const { setAlert, setAlertId } = alertSlice.actions;

export const selectAlert = (state) => state.alert;

export default alertSlice.reducer;
