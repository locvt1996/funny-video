import React, { useCallback, useState } from "react";

// types
import { IVideoItem } from "../store/video/type";

// components
import VideoItem from "./VideoItem";

interface ListVideoProps {
  videos: IVideoItem[];
}

const ListVideo: React.FC<ListVideoProps> = ({ videos }) => {
  return (
    <div
      className="container mx-auto text-center lg:px-40"
      data-testid="list-video"
    >
      {videos.map((item: IVideoItem) => (
        <VideoItem key={item.videoId} {...item} />
      ))}
    </div>
  );
};

export default ListVideo;
