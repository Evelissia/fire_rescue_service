import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  reports: {
    items: [],
    status: 'loading',
  },
  dangerLevel: {
    items: [],
    status: 'loading',
  },
};

const reportsSlice = createSlice({
  name: 'reports',
  initialState,
  reducer: {},
});

export const reportsReducer = reportsSlice.reducer;
