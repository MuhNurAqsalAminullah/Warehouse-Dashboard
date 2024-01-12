import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createKurangiStokBarangKeluar,
  createTambahStokBarangMasuk,
  getAllBarangKeluar,
  getAllBarangMasuk,
  getAllItem,
} from "../../api";
import { toast } from "react-toastify";

// <><>------ Data Barang ------<><>
// Get All Item Barang Async
export const getAllItemAsync = createAsyncThunk(
  "item/getAllItem",
  async (thunkAPI) => {
    try {
      const data = await getAllItem();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// <><>------ Transaksi ------<><>
// Get All Item Barang Masuk
export const getAllBarangMasukAsync = createAsyncThunk(
  "item/getAllBarangMasuk",
  async (thunkAPI) => {
    try {
      const data = await getAllBarangMasuk();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// Tambah Stok Barang
export const createTambahStokBarangMasukAsync = createAsyncThunk(
  "item/createTambahStokBarangMasuk",
  async (barang, { rejectWithValue }) => {
    try {
      const newStok = await createTambahStokBarangMasuk(barang);

      alert("add new stok Successfully");

      return newStok;
    } catch (error) {
      console.log(error.response.data.error);
      toast.error(error.response.data.error);
      return rejectWithValue(error.response.data.error);
    }
  }
);

// Get All Item Barang Keluar
export const getAllBarangKeluarAsync = createAsyncThunk(
  "item/getAllBarangKeluar",
  async (thunkAPI) => {
    try {
      const data = await getAllBarangKeluar();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// Kurangi Stok Barang
export const createKurangiStokBarangKeluarAsync = createAsyncThunk(
  "item/createKurangiStokBarangKeluar",
  async (barang, { rejectWithValue }) => {
    try {
      const reduceStok = await createKurangiStokBarangKeluar(barang);

      alert(" reduce stok Successfully ");

      return reduceStok;
    } catch (error) {
      console.log(error.response.data.error);
      toast.error(error.response.data.error);
      return rejectWithValue(error.response.data.error);
    }
  }
);

// <><>------ Laporan ------<><>
