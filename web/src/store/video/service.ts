import { createAsyncThunk } from "@reduxjs/toolkit";
import AppService from "../../api/appService";

export const updateVideoApi = createAsyncThunk(
  "video/upload",
  async (
    req: { videoId: string; title: string; description: string },
    thunkApi
  ) => {
    try {
      const response = await AppService.post("video", req);

      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error?.response);
    }
  }
);

export const getVideosApi = createAsyncThunk(
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
