import { RootState } from "../";

export const getLoadingUploadVideo = (state: RootState) => {
  return state.video.loadingUploadVideo;
};

export const getMessageUploadVideo = (state: RootState) => {
  return state.video.uploadVideoMessage;
};
