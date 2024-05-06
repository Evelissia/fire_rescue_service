import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchReports = createAsyncThunk('reports/fetchReports', async () => {
  const { data } = await axios.get('/fireReports');
  return data;
});

const initialState = {
  reports: {
    items: [],
    status: 'loading',
  },
  resources: {
    items: [],
    status: 'loading',
  },
};

const reportsSlice = createSlice({
  name: 'reports',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReports.pending, (state) => {
        state.reports.items = [];
        state.reports.status = 'loading';
      })
      .addCase(fetchReports.fulfilled, (state, action) => {
        state.reports.items = action.payload;
        state.reports.status = 'loaded';
      })
      .addCase(fetchReports.rejected, (state) => {
        state.reports.items = [];
        state.reports.status = 'error';
      });
  },
});

export const reportsReducer = reportsSlice.reducer;
