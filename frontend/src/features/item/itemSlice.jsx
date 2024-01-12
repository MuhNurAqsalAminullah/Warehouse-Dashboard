import { createSlice } from "@reduxjs/toolkit";
import { getAllItemAsync } from "./itemThunks";

const initialState = {
  list: [],
  status: "idle",
  error: null,
};

const dateItemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllItemAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllItemAsync.fulfilled, (state, action) => {
        state.status = "success";
        state.list = action.payload;
      })
      .addCase(getAllItemAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default dateItemSlice.reducer;
