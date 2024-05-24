import { configureStore } from '@reduxjs/toolkit';
import { reportsReducer } from './slices/reports';
import { resourcesReducer } from './slices/resources';
import { authReducer } from './slices/auth';

const store = configureStore({
  reducer: {
    reports: reportsReducer,
    resources: resourcesReducer,
    auth: authReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
