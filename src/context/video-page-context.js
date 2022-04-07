import { createContext, useContext, useReducer, useEffect } from "react";
import { apiCall } from "../utility/apiCall";
import { VideoReducerFunction } from "./VideoReducerFunction";

const VideoContext = createContext(null);
// const useVideoContext = () => useContext(VideoContext);
export const encodedToken = localStorage.getItem("token");

// const videoPageReducer = (videoPageState, action) => {
//   switch (action.type) {
//     case "CATEGORY_NAME":
//       return { ...videoPageState, categoryName: action.payload };
//     case "LIST":
//       return { ...videoPageState, videoList: action.payload };
//   }
// };

const VideoContextProvider = ({ children }) => {
  const [videoState, videoDispatch] = useReducer(
    VideoReducerFunction,
    {
      categoryName: "",
    //   videoList: [],
      videos: [],
	watchlater: [],
	likedvideos: [],
	history: [],
	categories: [],
	playlist: [],
    }
  );

  localStorage.setItem(
    "token",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJlMzIzZmY2MC1hMTUzLTQ0MTYtYmEyNS0zNDQ0ZGI1NjliOWMiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ._-fah2UEuueLmRHHl5uV4CYhiQdODX6neUkGbfTvtFM"
  );

  const value = {
    videoState,
    videoDispatch,
  };

  return (
    <VideoContext.Provider value={{videoState,videoDispatch}}>{children}</VideoContext.Provider>
  );
};
const useVideoContext = () => useContext(VideoContext);
export { useVideoContext, VideoContextProvider };



