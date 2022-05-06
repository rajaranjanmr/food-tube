import "./Home.css";
import img1 from "../assets/images/foodtube.png";
import "./card-video.css";
import { useEffect, useState } from "react";
import { HomePageCategory } from "../components/home-page-category";
import { getAllVideos, getCategories } from "../utility/apiCall";
import { useVideoContext } from "../context/video-page-context";
const Home = () => {
  const { videoState, videoDispatch } = useVideoContext();
  useEffect(() => {
    const getVideos = async () => {
      const response = await getCategories();
      videoDispatch({ type: "SET_CATEGORY", payload: response.categories });
    };
    getVideos();
  }, [videoDispatch]);
  return (
    <div class="cards cards-video">
      {videoState.categories.map((x) => {
        return <HomePageCategory  value={x} />;
      })}
    </div>
  );
};
export { Home };
