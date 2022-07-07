import { createAsyncThunk } from "@reduxjs/toolkit";
import AppService from "../../api/appService";

export const authenApi = createAsyncThunk(
  "auth/authentication",
  async (req: { email: string; password: string }, thunkApi) => {
    try {
      const response = await AppService.post("auth/authentication", req);

      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error?.response);
    }
  }
);

export const tryLoginApi = createAsyncThunk(
  "auth/try-login",
  async (req: {}, thunkApi) => {
    try {
      const response = await AppService.post("auth/try-login", req);

      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error?.response);
    }
  }
);
