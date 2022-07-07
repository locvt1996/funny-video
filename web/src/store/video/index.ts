import { createSlice } from "@reduxjs/toolkit";

// types
import { IVideo } from "./type";

// services
import { updateVideo } from "./service";

const initialState: IVideo = {
  loadingUploadVideo: false,
  uploadVideoMessage: "",
};

const { reducer, actions } = createSlice({
  name: "video",
  initialState,
  reducers: {
    setLoadingUploadVideo: (state, action) => {
      state.loadingUploadVideo = action.payload;
    },
    setMessageUploadVideo: (state, action) => {
      state.uploadVideoMessage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(updateVideo.pending, (state) => {
      state.uploadVideoMessage = "";
    });
    builder.addCase(updateVideo.fulfilled, (state) => {
      state.uploadVideoMessage = "Video update success";
    });
    builder.addCase(updateVideo.rejected, (state) => {
      state.uploadVideoMessage = "Video update fail";
    });
  },
});

const { setMessageUploadVideo, setLoadingUploadVideo } = actions;

export { setMessageUploadVideo, setLoadingUploadVideo };

export default reducer;
