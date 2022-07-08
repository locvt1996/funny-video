import { createAsyncThunk } from "@reduxjs/toolkit";
import AppService from "../../api/appService";

// types
import {
  IUpdateVideoApiReturn,
  IUpdateVideoApiPostData,
  IGetVideoApiReturn,
} from "./type";

export const updateVideoApi = createAsyncThunk<
  IUpdateVideoApiReturn,
  IUpdateVideoApiPostData
>("video/upload", async (req, thunkApi) => {
  try {
    const response = await AppService.post("video", req);

    return response.data;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error?.response);
  }
});

export const getVideosApi = createAsyncThunk<IGetVideoApiReturn>(
  "video/getList",
  async (_, thunkApi) => {
    try {
      const response = await AppService.get("video");

      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error?.response);
    }
  }
);
