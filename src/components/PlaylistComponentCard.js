import { useVideoContext } from "../context/video-page-context";
import ShowPlaylistContent from "../pages/ShowPlaylistContent";
import { addToSpecificPlaylist } from "../utility/apiCall";
import "../components/playlist.css";

function PlaylistComponentCard(props) {
  const { videoState, videoDispatch } = useVideoContext();

  const { value, playlistId } = props;
  async function addClickHandler(videoData, playlistId) {
    const response = await addToSpecificPlaylist(videoData, playlistId);
  }

  return (
    <div>
      <div className="card">
        <div className="title-video">{props.value.title}</div>
        <div className="description-video">{props.value.description}</div>
        <div class="quantity-up-down"></div>
        <div className="timestamp" ></div>
        <div className="card-btn-add">
          <p>
            <button
              className="videolisting"
              onClick={() => addClickHandler(value, playlistId)}
            >
              add
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
export default PlaylistComponentCard;
