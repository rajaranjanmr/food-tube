import { Link } from "react-router-dom"
import { useVideoContext } from "../context/video-page-context";
import { removeAllFromHistory, removeFromHistory } from "../utility/apiCall";
import './listing.css'
function HistoryVideoListing(props){
    console.log("inside page",props)
    const {videoState,videoDispatch} = useVideoContext();

   async function removeClickHandler(value){
        //removeFromHistory(item id) removeAllFromHistory 
        console.log("inside playclickhandler",value)
      //  const removeHistory = async () => {
          const response = await removeFromHistory(value);
          console.log(response,"history removal")
         // if (response.success) {
            videoDispatch({ type: "SET_HISTORY", payload: response.history});
        //  } else {
            //console.log("ERR");
         // }
      //  };
       // removeHistory();
    }

    

    return(
        
        <div className="card">
      <img className="thumbnail" src={props.value.image} alt="biryani" style={{ width: "100%" }}  onClick={console.log("its card")}/>
      <div className="title-video">{props.value.title}</div>
      <div className="description-video">{props.value.description}</div>
      <div className="channel-name" style={{   }}>{props.value.channel}</div>
      <div className="creator-name" style={{   }}>{props.value.creator}</div>

      <div class="quantity-up-down">
        {props.value.views} |
        <div className="like">
        <i class="fa fa-thumbs-up">2.3k</i>
        </div>
        
        <div className="dislike">
        <i class="fa fa-thumbs-down">3.k</i>
        </div>
        
      </div>
      <div className="timestamp" style={{ display:"inline"  }}>
          {props.value.postDate}  
        </div>
        <div className="card-btn-add">
        <p>
          <button  className="videolisting" 
          
            onClick={()=>removeClickHandler(props.value._id)}
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
export {HistoryVideoListing}