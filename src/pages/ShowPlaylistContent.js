import { useVideoContext } from "../context/video-page-context";
import {
  addToHistory,
  addToLikedVideos,
  deleteFromSpecificPlaylist,
  removeFromLikedVideos,
} from "../utility/apiCall";
import "./card-video.css";
import "../components/playlist.css";
import { useLocation } from "react-router-dom";

function ShowPlaylistContent(props) {
  const { value } = props;
  const location = useLocation();

  const { videoDispatch } = useVideoContext();
  async function deleteVideo(playlist_id, video_id) {
    const response = await deleteFromSpecificPlaylist(playlist_id, video_id);
    videoDispatch({ type: "SET_PLAYLISTS", payload: response.playlist });
  }
  function playClickHandler(value) {
    const addHistory = async () => {
      const response = await addToHistory(value);
      videoDispatch({ type: "SET_HISTORY", payload: response.history });
    };
    addHistory();
  }
  async function likedClickHandler(value) {
    const response = await addToLikedVideos(value);
    videoDispatch({ type: "SET_LIKED_VIDEOS", payload: response.likes });
  }

  async function unlikeClickedHandler(value) {
    const response = await removeFromLikedVideos(value);
    videoDispatch({ type: "SET_LIKED_VIDEOS", payload: response.likes });
  }
  return (
    <div className="card">
      <img
        className="thumbnail"
        src={props.value.val.image}
        alt="biryani"
        style={{ width: "100%" }}
        onClick={console.log("its card")}
      />
      <div className="title-video">{props.value.val.title}</div>
      <div className="description-video">{props.value.val.description}</div>
      <div className="channel-name" style={{}}>
        {props.value.val.channel}
      </div>
      <div className="creator-name" style={{}}>
        {props.value.val.creator}
      </div>

      <div class="quantity-up-down">
        {props.value.val.views} |
        <div className="like">
          <i
            class="fa fa-thumbs-up"
            onClick={() => likedClickHandler(props.valu.val)}
          >
            2.3k
          </i>
        </div>
        <div className="dislike">
          <i
            class="fa fa-thumbs-down"
            onClick={() => unlikeClickedHandler(props.value.val)}
          >
            3.k
          </i>
        </div>
      </div>
      <div className="timestamp" style={{ display: "inline" }}>
        {props.value.val.postDate}
      </div>
      <div className="card-btn-add">
        <p>
          <button
            className="videolisting"
            onClick={() => playClickHandler(props.value.val)}
          >
            Play
          </button>
        </p>
        <p>
          <button
            className="videolisting"
            onClick={() =>
              deleteVideo(props.value.playlist_id, props.value.val._id)
            }
          >
            Remove
          </button>
        </p>
      </div>
    </div>
  );
}
export default ShowPlaylistContent;
