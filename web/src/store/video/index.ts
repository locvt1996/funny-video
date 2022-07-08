import { createSlice } from "@reduxjs/toolkit";

// types
import { IVideo } from "./type";

// services
import { updateVideoApi, getVideosApi } from "./service";

const initialState: IVideo = {
  loadingUploadVideo: false,
  uploadVideoMessage: "",
  loadingListVideo: false,
  videos: [],
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
    // UPLOAD VIDEO
    builder.addCase(updateVideoApi.pending, (state) => {
      state.uploadVideoMessage = "";
    });
    builder.addCase(updateVideoApi.fulfilled, (state) => {
      state.uploadVideoMessage = "Video update success";
      state.loadingUploadVideo = false;
    });
    builder.addCase(updateVideoApi.rejected, (state) => {
      state.uploadVideoMessage = "Video update fail";
      state.loadingUploadVideo = false;
    });

    // GET LIST VIDEO
    builder.addCase(getVideosApi.pending, (state) => {
      state.loadingListVideo = true;
    });
    builder.addCase(getVideosApi.fulfilled, (state, action) => {
      const { videos } = action?.payload as any;
      state.loadingListVideo = false;
      state.videos = videos;
    });
    builder.addCase(getVideosApi.rejected, (state) => {
      state.loadingListVideo = false;
      state.videos = [];
    });
  },
});

const { setMessageUploadVideo, setLoadingUploadVideo } = actions;

export { setMessageUploadVideo, setLoadingUploadVideo };

export default reducer;
