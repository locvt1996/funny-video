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
