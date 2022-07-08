export interface IVideoItem {
  videoId: string;
  title: string;
  description: string;
  uploadBy: string;
}

export interface IVideo {
  loadingUploadVideo: boolean;
  uploadVideoMessage: string;
  loadingListVideo: boolean;
  videos: IVideoItem[];
}

export interface IUpdateVideoApiReturn {
  message: string;
  status: string;
  success: boolean;
}

export interface IUpdateVideoApiPostData {
  videoId: string;
  title: string;
  description: string;
}

export interface IGetVideoApiReturn {
  message: string;
  status: string;
  success: boolean;
  videos: IVideoItem[];
}
