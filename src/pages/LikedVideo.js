import { useEffect } from "react";
import { LikedVideoListPage } from "../components/liked-video-page";
import { useVideoContext } from "../context/video-page-context";
import { getLikedVideos } from "../utility/apiCall";

function LikedVideo() {
  const { videoState, videoDispatch } = useVideoContext();
  useEffect(() => {
    const getLikeVideos = async () => {
      const response = await getLikedVideos();
      if (response.success) {
        videoDispatch({ type: "SET_LIKED_VIDEOS", payload: response.likes });
      } else {
        console.log("ERR");
      }
    };

    getLikeVideos();
  }, [videoDispatch]);

  return (
    <div className="cards-video">
      {videoState.likedvideos.map((x) => {
        return <LikedVideoListPage value={x} />;
      })}
    </div>
  );
}
export { LikedVideo };
