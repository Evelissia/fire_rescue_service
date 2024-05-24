import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchReports = createAsyncThunk('reports/fetchReports', async () => {
  const { data } = await axios.get('/fireReports');
  return data;
});

export const fetchRemoveReport = createAsyncThunk('reports/fetchRemoveReport', async (reportId) => {
  await axios.delete(`/fireReports/${reportId}`);
  return reportId;
});

export const fetchUpdateReport = createAsyncThunk(
  'reports/fetchUpdateReport',
  async ({ reportId, updatedData }) => {
    const { data } = await axios.patch(`/fireReports/${reportId}`, updatedData);
    return { reportId, updatedData: data };
  },
);

export const fetchAddReport = createAsyncThunk('reports/fetchAddReport', async (newReport) => {
  const { data } = await axios.post('/fireReports', newReport);
  return data;
});

const initialState = {
  reports: {
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
      })
      .addCase(fetchRemoveReport.fulfilled, (state, action) => {
        state.reports.items = state.reports.items.filter((report) => report._id !== action.payload);
      })
      .addCase(fetchAddReport.fulfilled, (state, action) => {
        state.reports.items.push(action.payload);
      })
      .addCase(fetchUpdateReport.fulfilled, (state, action) => {
        const index = state.reports.items.findIndex(
          (report) => report._id === action.payload.reportId,
        );
        if (index !== -1) {
          state.reports.items[index] = action.payload.updatedData;
        }
      });
  },
});

export const reportsReducer = reportsSlice.reducer;
