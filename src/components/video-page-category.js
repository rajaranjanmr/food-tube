import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useVideoContext } from "../context/video-page-context";
import {History} from "../pages/History"
import { addToHistory, addToLikedVideos, addToWatchLater, removeFromLikedVideos } from "../utility/apiCall";
import {HistoryVideoListing} from "../components/history-video-page"

function VideoListingPage(props){
    const {videoState,videoDispatch} = useVideoContext();
    console.log("inside video page category",props)

        function playClickHandler(value){
            console.log("inside playclickhandler",value)
        const addHistory = async () => {
          const response = await addToHistory(value);
          console.log(response)
            videoDispatch({ type: "SET_HISTORY", payload: response.history});
        
        };
        addHistory();
    }
    console.log(videoState.history,"j sjde")
    async function watchClickHandler(value){

            const response = await addToWatchLater(value);
            
            console.log("inside watchlater",response)
            videoDispatch({type: "SET_WATCHLATER", payload: response.watchlater})
            
        
    }

    async function likedClickHandler(value){
        
            const response = await addToLikedVideos(value);
            console.log("inside likedClickHandler",response)
            videoDispatch({type: "SET_LIKED_VIDEOS", payload: response.likes})
        
    }

    async function unlikeClickedHandler(value){
        const response = await removeFromLikedVideos(value);
        console.log("inside watchlaetr",response)
        videoDispatch({type: "SET_LIKED_VIDEOS", payload: response.likes})
   
}
    return(
        <div className="card">
      <img className="thumbnail" src={props.value.image} alt="biryani" style={{ width: "100%" }}  onClick={console.log("its card")}/>
      <div className="title-video">{props.value.title}</div>
      <div className="description-video">{props.value.description}</div>
      <div className="channel-name" style={{ display:"inline"  }}>{props.value.channel}</div>

      <div class="quantity-up-down">
        {props.value.creator} | {}
        <div className="like">
        <i class="fa fa-thumbs-up" onClick={()=>likedClickHandler(props.value)}>2.3k</i>
        </div>
        <div className="dislike">
        <i class="fa fa-thumbs-down" onClick={()=>unlikeClickedHandler(props.value._id)}>3.k</i>
        </div>
        
      </div>
      <div className="timestamp" style={{ display:"inline"  }}>
          {props.value.postDate}  &nbsp; | &nbsp; 
        </div>
      <div className="card-btn-add">
        <p>
          <button  className="videolisting" 
          onClick={()=>playClickHandler(props.value)}
            
          >
            Play
          </button>
        </p>
        <p>
          <button className="videolisting" 
          onClick={()=>watchClickHandler(props.value)} 
          >Watch Later</button>
        </p>
      </div>
    </div>
    )
}
export {VideoListingPage}