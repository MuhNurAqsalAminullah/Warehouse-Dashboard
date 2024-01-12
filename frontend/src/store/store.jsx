import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import itemReducer from "../features/item/itemSlice";
import barangMasukReducer from "../features/item/itemBarangMasukSlice";
import barangKeluarReducer from "../features/item/itemBarangKeluarSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    item: itemReducer,
    barangMasuk: barangMasukReducer,
    barangKeluar: barangKeluarReducer,
  },
});

export default store;
