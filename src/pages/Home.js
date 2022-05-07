import "./Home.css";
import img1 from "../assets/images/foodtube.png";
import "./card-video.css";
import { useEffect, useState } from "react";
import { HomePageCategory } from "../components/home-page-category";
import { getAllVideos, getCategories } from "../utility/apiCall";
import { useVideoContext } from "../context/video-page-context";
import { Toast } from "../components/Toast";
const Home = () => {
  const { videoState, videoDispatch } = useVideoContext();
  const [msg,setMsg] = useState("")
  useEffect(() => {
    const getVideos = async () => {
      const response = await getCategories();
      videoDispatch({ type: "SET_CATEGORY", payload: response.categories });
    };
    getVideos();
  }, [videoDispatch]);
  useEffect(()=>{
    localStorage.getItem("token") ? setMsg("Welcome") : setMsg("Please Login/Signup")

  },[])
  return (
    <div class="cards cards-video">
      {
        <Toast value={msg}/>}
      {videoState.categories.map((x) => {
        return <HomePageCategory  value={x} />;
      })}
    </div>
  );
};
export { Home };
