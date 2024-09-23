import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../utils/instance";
import { toast } from "react-toastify";

export const loginUser = createAsyncThunk(
  "user/login",
  async (data, thunkAPI) => {
    try {
      const response = await instance.post("/auth/login", data);
      let token = response.data.token;
      localStorage.setItem("token", token);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      toast.error(error?.data?.message || "something went wrong");
      return thunkAPI.rejectWithValue(error?.data);
    }
  }
);
