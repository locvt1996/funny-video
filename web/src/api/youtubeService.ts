export const fetchInfoYoutubeVideo = async (id: string) => {
  try {
    const response: any = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${process.env.REACT_APP_GOOGLE_KEY}&part=snippet`
    );
    const result = await response?.json();

    return result?.items?.[0]?.snippet;
  } catch (error) {
    return null;
  }
};
