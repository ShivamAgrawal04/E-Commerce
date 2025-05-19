import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../api/axiosInstance";

export const registerUser = createAsyncThunk(
  "products/",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post("/auth/register", userData, {
        withCredentials: true,
      });
      console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
