import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../layout";
import Dashboard from "../page/Dashboard";
import DataBarang from "../page/Master/DataBarang/DataBarang";
import BarangSatuan from "../page/Master/BarangSatuan/BarangSatuan";
import BarangMasuk from "../page/Transaksi/BarangMasuk/BarangMasuk";
import BarangKeluar from "../page/Transaksi/BarangKeluar/BarangKeluar";
import LaporanStok from "../page/Laporan/LaporanStok/LaporanStok";
import LaporanBarangMasuk from "../page/Laporan/LaporanMasuk.jsx/LaporanBarangMasuk";
import LaporanBarangKeluar from "../page/Laporan/LaporanKeluar/LaporanBarangKeluar";
import Profile from "../page/Pengaturan/Profile/Index";
import UserManajement from "../page/Pengaturan/UserManajement";
import Login from "../page/Auth/Login";
import { ProtectRouteOutlet } from "./PrivateRoute";

const Router = () => {
  return (
    // <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to={"/login"} />} />
      <Route path="/login" element={<Login />} />

      {/* <Route element={<ProtectRouteOutlet />}> */}
      <Route path="/dashboard" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="data-barang" element={<DataBarang />} />
        <Route path="barang-satuan" element={<BarangSatuan />} />
        <Route path="barang-masuk" element={<BarangMasuk />} />
        <Route path="barang-keluar" element={<BarangKeluar />} />
        <Route path="laporan-stok" element={<LaporanStok />} />
        <Route path="laporan-barang-masuk" element={<LaporanBarangMasuk />} />
        <Route path="laporan-barang-keluar" element={<LaporanBarangKeluar />} />
        <Route path="profile" element={<Profile />} />
        <Route path="user-manajement" element={<UserManajement />} />
      </Route>
      {/* </Route> */}
    </Routes>
    // </BrowserRouter>
  );
};

export default Router;
