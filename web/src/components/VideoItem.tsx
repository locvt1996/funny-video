import React, { useCallback, useState } from "react";

// types
import { IVideoItem } from "../store/video/type";

const VideoItem: React.FC<IVideoItem> = ({
  title,
  videoId,
  description,
  uploadBy,
}) => {
  return (
    <div className="flex">
      <div>
        <iframe
          width={320}
          height={215}
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder={0}
          allowFullScreen
        ></iframe>
      </div>
      <div className="ml-8 text-left w-3/5">
        <div className="truncate">{title}</div>
        <div className="my-4">Share by: {uploadBy}</div>
        <div className="truncate whitespace-normal">{description}</div>
      </div>
    </div>
  );
};

export default VideoItem;
