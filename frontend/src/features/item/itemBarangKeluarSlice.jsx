import { createSlice } from "@reduxjs/toolkit";
import {
  createKurangiStokBarangKeluarAsync,
  getAllBarangKeluarAsync,
} from "./itemThunks";

const initialState = {
  list: [],
  status: "idle",
  error: null,
};

const barangKeluarSlice = createSlice({
  name: "barang keluar",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBarangKeluarAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllBarangKeluarAsync.fulfilled, (state, action) => {
        state.status = "success";
        state.list = action.payload;
      })
      .addCase(getAllBarangKeluarAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createKurangiStokBarangKeluarAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        createKurangiStokBarangKeluarAsync.fulfilled,
        (state, action) => {
          state.status = "success";
          state.list.push(action.payload);
        }
      )
      .addCase(createKurangiStokBarangKeluarAsync.rejected, (state, action) => {
        state.status = "failed";
        state.list = action.error.message;
      });
  },
});

export default barangKeluarSlice.reducer;
