import { createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { login as apiLogin } from "../../api";
import { login } from "./authSlice";
import { toast } from "react-toastify";

export const loginAsync = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await apiLogin(credentials);
      const { role, token } = response;

      localStorage.setItem("token", token);

      console.log("Token:", token);
      console.log("Role ID:", role);
      console.log(`Login ${role} Berhasil`);

      toast.success("Halo 👋, Selamat anda berhasil login");

      return role;
    } catch (error) {
      console.log(error.response.data.error);
      toast.error(error.response.data.error);
      return rejectWithValue(error.response.data.error);
      // throw error.response.data.error;
    }
  }
);
