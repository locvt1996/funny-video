import { createAsyncThunk } from "@reduxjs/toolkit";
import AppService from "../../api/appService";

export const updateVideo = createAsyncThunk(
  "video/upload",
  async (req: { videoId: string; title: string; desc: string }, thunkApi) => {
    try {
      const response = await AppService.post("video", req);

      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error?.response);
    }
  }
);
