import { createAsyncThunk } from "@reduxjs/toolkit";
import AppService from "../../api/appService";

// types
import { IAuthenApiReturn, IAuthenApiPostData } from "./type";

export const authenApi = createAsyncThunk<IAuthenApiReturn, IAuthenApiPostData>(
  "auth/authentication",
  async (req, thunkApi) => {
    try {
      const response = await AppService.post("auth/authentication", req);

      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error?.response);
    }
  }
);

export const tryLoginApi = createAsyncThunk<IAuthenApiReturn>(
  "auth/try-login",
  async (_, thunkApi) => {
    try {
      const response = await AppService.post("auth/try-login", {});

      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error?.response);
    }
  }
);
