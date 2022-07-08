import React, { useCallback, useState, memo } from "react";
import { useDispatch, batch } from "react-redux";

// services
import { fetchInfoYoutubeVideo } from "../api/youtubeService";
import { updateVideoApi } from "../store/video/service";

// actions
import { setMessageUploadVideo, setLoadingUploadVideo } from "../store/video";

// selector
import { useAppSelector } from "../hooks/useAppSelector";
import {
  getLoadingUploadVideo,
  getMessageUploadVideo,
} from "../store/video/selector";

interface ShareVideoPageProps {}

const ShareVideoPage: React.FC<ShareVideoPageProps> = ({}) => {
  const dispatch = useDispatch();
  const [shareVideoLink, setShareVideoLink] = useState("");
  const loading = useAppSelector(getLoadingUploadVideo);
  const message = useAppSelector(getMessageUploadVideo);

  const handleUpdateVideo = useCallback(async () => {
    const videoId = shareVideoLink?.split("v=")?.[1];

    dispatch(setLoadingUploadVideo(true));
    const videoInfo = await fetchInfoYoutubeVideo(videoId);
    if (!videoInfo) {
      batch(() => {
        dispatch(setLoadingUploadVideo(false));
        dispatch(setMessageUploadVideo("Not found the video"));
      });
      return;
    }

    dispatch(
      updateVideoApi({
        videoId,
        title: videoInfo.title,
        description: videoInfo.description,
      })
    );
  }, [shareVideoLink, dispatch]);

  return (
    <div data-testid="share-video-page">
      <div className="max-w-screen-md rounded overflow-hidden shadow-lg mx-auto text-center mt-20">
        <div className={`px-6 py-4 text-center ${loading && "loading"}`}>
          <div className="mb-10">Share a Youtube movie</div>

          <div className="flex items-center justify-center">
            <span className="mr-8">Yotube URL:</span>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-2/4"
              id="share-video"
              type="text"
              placeholder="Share video"
              value={shareVideoLink}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setShareVideoLink(event.target.value);
                dispatch(setMessageUploadVideo(""));
              }}
            />
          </div>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10"
            onClick={handleUpdateVideo}
          >
            Share
          </button>

          {message && <div className="mt-10">{message}</div>}
        </div>
      </div>
    </div>
  );
};

export default memo(ShareVideoPage);
