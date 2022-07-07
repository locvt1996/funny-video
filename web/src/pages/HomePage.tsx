import React, { useEffect, memo } from "react";
import { useDispatch } from "react-redux";

// services
import { getVideosApi } from "../store/video/service";

// selector
import { useAppSelector } from "../hooks/useAppSelector";
import { getListVideo } from "../store/video/selector";

// components
import ListVideo from "../components/ListVideo";

interface HomaPageProps {}

const HomePage: React.FC<HomaPageProps> = ({}) => {
  const dispatch = useDispatch();

  const videos = useAppSelector(getListVideo);

  useEffect(() => {
    dispatch(getVideosApi());
  }, [dispatch]);

  return (
    <div data-testid="home-page">
      <ListVideo videos={videos} />
    </div>
  );
};

export default memo(HomePage);
