import { useVideoContext } from "../context/video-page-context";
import { addToHistory, removeFromLikedVideos } from "../utility/apiCall";

function LikedVideoListPage(props){
    const {videoState,videoDispatch} = useVideoContext();

    async function unlikeClickedHandler(value){
            const response = await removeFromLikedVideos(value);
            console.log("inside watchlaetr",response)
            videoDispatch({type: "SET_LIKED_VIDEOS", payload: response.likes})
       
    }
    function playClickHandler(value){
        console.log("inside playclickhandler",value)
    const addHistory = async () => {
      const response = await addToHistory(value);
      console.log(response)
     // if (response.success) {
        videoDispatch({ type: "SET_HISTORY", payload: response.history});
    //  } else {
        //console.log("ERR");
     // }
    };
    addHistory();
}
    return(
       <div className="card">
      <img className="thumbnail" src={props.value.image} alt="thumbnail" style={{ width: "100%" }}  onClick={console.log("its card")}/>
      <div className="title-video">{props.value.title}</div>
      <div className="description-video">{props.value.description}</div>
      <div className="channel-name" style={{ display:"inline"  }}>{props.value.channel}</div>
      <div className="creator-name" style={{ display:"inline"  }}>{props.value.creator}</div>

      <div class="quantity-up-down">
        {props.value.view} &nbsp;&nbsp;|
        {/* <div className="like">
        <i class="fa fa-thumbs-up">2.3k</i>
        </div> */}
        
        <div className="dislike">
        <i class="fa fa-thumbs-down" onClick={ ()=>unlikeClickedHandler(props.value._id) }>3.k</i>
        </div>
        
      </div>
      <div className="timestamp" style={{ display:"inline"  }}>
         {props.value.postDate}
        </div>
        <div className="card-btn-add">
        <p>
          <button  className="videolisting" 
          onClick={()=>playClickHandler(props.value)}
            
          >
            Play Now
          </button>
        </p>
        {/* <p>
          <button  className="videolisting">Clear</button>
        </p> */}
      </div>
    </div>
    )
}
export{LikedVideoListPage}