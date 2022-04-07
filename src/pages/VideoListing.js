import { Link } from "react-router-dom"
import img1 from "../assets/images/foodtube.png"
import { useVideoContext } from "../context/video-page-context"
import {VideoListingPage} from "../components/video-page-category"
import { getAllVideos } from "../utility/apiCall";
import { useEffect } from "react";
function VideoListing(){
    const {videoState,videoDispatch} = useVideoContext();
    console.log(videoState)
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

    const {categoryName, videos} = videoState;
    console.log(videos ,"cateegory",categoryName )
    function filterByCategory(videos){
      const filteredData =   videos.filter((x)=>{
            // if(x.categoryName===categoryName){
            return x.categoryName === categoryName
            
      })
      console.log(filteredData,"inside method")
//how does it knows - that on click it will run this? i mean this willbe running
//because there we have only called dispatcher while clicking wathc more
//
        return filteredData
    }
    const filteredData = filterByCategory(videos)
    console.log(filteredData)
    return(
        <div className="cards-video">
    
    {filteredData.map((x)=>{
            return <VideoListingPage value={x} />
        })}
        
</div>
    
    )
}

export {VideoListing}