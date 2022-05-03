import { useVideoContext } from "../context/video-page-context";
import {removeFromHistory } from "../utility/apiCall";
import "./listing.css";
import "../components/playlist.css";
function HistoryVideoListing(props) {
  const {videoDispatch } = useVideoContext();
  async function removeClickHandler(value) {
    const response = await removeFromHistory(value);
    videoDispatch({ type: "SET_HISTORY", payload: response.history });
  }
  return (
    <div className="card">
      <img
        className="thumbnail"
        src={props.value.image}
        alt="biryani"
      />
      <div className="title-video">{props.value.title}</div>
      <div className="description-video">{props.value.description}</div>
      <div className="channel-name">
        {props.value.channel}
      </div>
      <div className="creator-name">
        {props.value.creator}
      </div>

      <div class="quantity-up-down">
        {props.value.views} |
        <div className="like">
          <i class="fa fa-thumbs-up">2.3k</i>
        </div>
        <div className="dislike">
          <i class="fa fa-thumbs-down">3.k</i>
        </div>
      </div>
      <div className="timestamp" style={{ display: "inline" }}>
        {props.value.postDate}
      </div>
      <div className="card-btn-add">
        <p>
          <button
            className="videolisting"
            onClick={() => removeClickHandler(props.value._id)}
          >
            Remove
          </button>
        </p>
      </div>
    </div>
  );
}
export { HistoryVideoListing };
