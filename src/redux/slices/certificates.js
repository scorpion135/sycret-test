import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = '011ba11bdcad4fa396660c2ec447ef14'

export const fetchCertificates = createAsyncThunk(
  'certificates/fetchCertificates',
  async () => {
    try {
      const response = await axios.get("https://sycret.ru/service/api/api", {
        params: {
          ApiKey: API_KEY,
          MethodName: 'OSGetGoodList',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Ошибка при получении списка сертификатов:', error);
    }
  }
);

const certificatesSlice = createSlice({
  name: 'certificates',
  initialState: {
    items: [],
    status: 'loading',
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCertificates.pending, (state) => {
        state.status = 'loading';
        state.items = [];
      })
      .addCase(fetchCertificates.fulfilled, (state, action) => {
        state.status = 'success';
        state.items = action.payload.data; 
      })
      .addCase(fetchCertificates.rejected, (state) => {
        state.status = 'error';
        state.items = [];
      });
  },
});

export const certificatesReducer = certificatesSlice.reducer;
