import { Link } from "react-router-dom";
import img1 from "../assets/images/foodtube.png";
import { useVideoContext } from "../context/video-page-context";
import { VideoListingPage } from "../components/video-page-category";
import { getAllVideos } from "../utility/apiCall";
import { useEffect } from "react";
function VideoListing() {
  const { videoState, videoDispatch } = useVideoContext();
  useEffect(() => {
    const getVideos = async () => {
      const response = await getAllVideos();
      if (response.success) {
        videoDispatch({ type: "SET_VIDEOS", payload: response.videos });
      } else {
        console.log("ERR");
      }
    };
    getVideos();
  }, [videoDispatch]);

  const { categoryName, videos } = videoState;
  function filterByCategory(videos) {
    const filteredData = videos.filter((x) => {
      return x.categoryName === categoryName;
    });
    return filteredData;
  }
  const filteredData = filterByCategory(videos);
  return (
    <div className="cards-video">
      {filteredData.map((x) => {
        return <VideoListingPage value={x} />;
      })}
    </div>
  );
}

export { VideoListing };
