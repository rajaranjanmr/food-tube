import { useVideoContext } from "../context/video-page-context";
import { addToHistory, removeFromLikedVideos } from "../utility/apiCall";

function LikedVideoListPage(props) {
  const { videoDispatch } = useVideoContext();
  async function unlikeClickedHandler(value) {
    const response = await removeFromLikedVideos(value);
    videoDispatch({ type: "SET_LIKED_VIDEOS", payload: response.likes });
  }
  function playClickHandler(value) {
    const addHistory = async () => {
      const response = await addToHistory(value);
      videoDispatch({ type: "SET_HISTORY", payload: response.history });
    };
    addHistory();
  }
  return (
    <div className="card">
      <img
        className="thumbnail"
        src={props.value.image}
        alt="thumbnail"
        style={{ width: "100%" }}
      />
      <div className="title-video">{props.value.title}</div>
      <div className="description-video">{props.value.description}</div>
      <div className="channel-name" style={{ display: "inline" }}>
        {props.value.channel}
      </div>
      <div className="creator-name" style={{ display: "inline" }}>
        {props.value.creator}
      </div>

      <div class="quantity-up-down">
        {props.value.view} &nbsp;&nbsp;|
        <div className="dislike">
          <i
            class="fa fa-thumbs-down"
            onClick={() => unlikeClickedHandler(props.value._id)}
          >
            3.k
          </i>
        </div>
      </div>
      <div className="timestamp" style={{ display: "inline" }}>
        {props.value.postDate}
      </div>
      <div className="card-btn-add">
        <p>
          <button
            className="videolisting"
            onClick={() => playClickHandler(props.value)}
          >
            Play Now
          </button>
        </p>
      </div>
    </div>
  );
}
export { LikedVideoListPage };
