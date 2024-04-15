import { configureStore } from '@reduxjs/toolkit';
import { reportsReducer } from './slices/reports';
import { authReducer } from './slices/auth';

const store = configureStore({
  reducer: {
    reports: reportsReducer,
    auth: authReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
