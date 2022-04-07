import { useVideoContext } from "../context/video-page-context";
import {  removeFromWatchLater } from "../utility/apiCall";

function WatchLaterVideoList(props){
  const {videoState,videoDispatch} = useVideoContext();

  async function removeFromWatch(value){

    const response = await removeFromWatchLater(value);
    
    console.log("inside watchlater",response)
    videoDispatch({type: "SET_WATCHLATER", payload: response.watchlater})
    

}
    return(
        <div className="card">
      <img className="thumbnail" src={props.value.image} alt="thumbnail" style={{ width: "100%" }}  onClick={console.log("its card")}/>
      <div className="title-video">{props.value.title}</div>
      <div className="description-video">{props.value.description}</div>
      <div className="channel-name" style={{ display:"inline"  }}>{props.value.channel}</div>
      <div className="creator-name" style={{ display:"inline"  }}>{props.value.creator}</div>

      <div class="quantity-up-down">
        7.5M Views
        {/* <div className="like">
        <i class="fa fa-thumbs-up">2.3k</i>
        </div>
        
        <div className="dislike">
        <i class="fa fa-thumbs-down">3.k</i>
        </div> */}
        
      </div>
      <div className="timestamp" style={{ display:"inline"  }}>
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
        {/* <p>
          <button  className="videolisting">Clear</button>
        </p> */}
      </div>
    </div>
    )
}
export {WatchLaterVideoList}