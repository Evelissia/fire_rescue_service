// redux/slices/resources.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchResources = createAsyncThunk('resources/fetchResources', async () => {
  const { data } = await axios.get('/FireResources');
  return data;
});

export const fetchRemoveResources = createAsyncThunk(
  'resources/fetchRemoveResources', // Используем уникальный идентификатор
  async (resourceId) => {
    await axios.delete(`/FireResources/${resourceId}`);
    return resourceId;
  },
);

const initialState = {
  resources: {
    items: [],
    status: 'idle',
  },
};

const resourcesSlice = createSlice({
  name: 'resources',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchResources.pending, (state) => {
        state.resources.items = [];
        state.resources.status = 'loading';
      })
      .addCase(fetchResources.fulfilled, (state, action) => {
        state.resources.items = action.payload;
        state.resources.status = 'loaded';
      })
      .addCase(fetchResources.rejected, (state) => {
        state.resources.items = [];
        state.resources.status = 'error';
      })
      .addCase(fetchRemoveResources.fulfilled, (state, action) => {
        state.resources.items = state.resources.items.filter(
          (resource) => resource._id !== action.payload,
        );
      });
  },
});

export const resourcesReducer = resourcesSlice.reducer;
