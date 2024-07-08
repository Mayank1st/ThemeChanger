// slices/profileSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  title: '',
  location: '',
  biography: ''
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile(state, action) {
      return { ...state, ...action.payload };
    },
    updateProfile(state, action) {
      return { ...state, ...action.payload };
    }
  }
});

export const { setProfile, updateProfile } = profileSlice.actions;

export default profileSlice.reducer;
