import { createSlice } from "@reduxjs/toolkit";
import {
  createTambahStokBarangMasukAsync,
  getAllBarangMasukAsync,
} from "./itemThunks";

const initialState = {
  list: [],
  status: "idle",
  error: null,
};

const barangMasukSlice = createSlice({
  name: "barang masuk",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBarangMasukAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllBarangMasukAsync.fulfilled, (state, action) => {
        state.status = "success";
        state.list = action.payload;
      })
      .addCase(getAllBarangMasukAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createTambahStokBarangMasukAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createTambahStokBarangMasukAsync.fulfilled, (state, action) => {
        state.status = "success";
        state.list.push(action.payload);
      })
      .addCase(createTambahStokBarangMasukAsync.rejected, (state, action) => {
        state.status = "failed";
        state.list = action.error.message;
      });
  },
});

export default barangMasukSlice.reducer;
