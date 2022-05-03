import { useVideoContext } from "../context/video-page-context";
import {  removeFromWatchLater } from "../utility/apiCall";
import "./playlist.css";
function WatchLaterVideoList(props){
  const {videoDispatch} = useVideoContext();
  async function removeFromWatch(value){
    const response = await removeFromWatchLater(value);   
    videoDispatch({type: "SET_WATCHLATER", payload: response.watchlater})
}
    return(
        <div className="card">
      <img className="thumbnail" src={props.value.image} alt="thumbnail" />
      <div className="title-video">{props.value.title}</div>
      <div className="description-video">{props.value.description}</div>
      <div className="channel-name" >{props.value.channel}</div>
      <div className="creator-name" >{props.value.creator}</div>

      <div class="quantity-up-down">
        7.5M Views
      </div>
      <div className="timestamp">
          {props.value.postDate}
        </div>
        <div className="card-btn-add">
        <p>
          <button  className="videolisting" 
          onClick={()=>removeFromWatch(props.value._id)}
          >
            Remove
          </button>
        </p>
      </div>
    </div>
    )
}
export {WatchLaterVideoList}