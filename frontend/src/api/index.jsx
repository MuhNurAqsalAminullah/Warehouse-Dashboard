import axios from "axios";

const API_BASE_URL_LOCAL = "http://localhost:3000";
// const API_BASE_URL_LOCAL = "http://localhost:3000/api/barang"
// const API_BASE_URL_LOCAL = "http://localhost:3000/api/auth"

const api = axios.create({
  baseURL: API_BASE_URL_LOCAL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAuthToken = () => {
  return localStorage.getItem("token");
};

// Auth Login
export const login = async (data) => {
  const res = await api.post("/api/auth/login", data);
  return res.data;
};

// <><>------ Data Barang ------<><>
// Item Get All Barang
export const getAllItem = async () => {
  const authToken = getAuthToken();

  try {
    const response = await api.get("/api/barang", {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    const data = response.data;
    // console.log(data.data);
    return data.data;
  } catch (error) {
    throw error.response.data;
  }
};

// <><>------ Transaksi ------<><>
// Get All Item Barang Masuk
export const getAllBarangMasuk = async () => {
  const authToken = getAuthToken();

  try {
    const response = await api.get("/api/barang-masuk", {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    const data = response.data;
    // console.log(data.data);
    return data.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Tambah Stok Barang
export const createTambahStokBarangMasuk = async (barang) => {
  const authToken = getAuthToken();

  try {
    const response = await api.post("/api/barang-masuk", barang, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Get All Item Barang Keluar
export const getAllBarangKeluar = async () => {
  const authToken = getAuthToken();

  try {
    const response = await api.get("/api/barang-keluar", {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    const data = response.data;
    // console.log(data.data);
    return data.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Kurangi Stok Barang
export const createKurangiStokBarangKeluar = async (barang) => {
  const authToken = getAuthToken();

  try {
    const response = await api.post("/api/barang-keluar", barang, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// <><>------ Laporan ------<><>
