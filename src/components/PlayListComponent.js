import { useVideoContext } from "../context/video-page-context";
import {
  getPlaylistById,
  getPlaylists,
  removePlaylist,
} from "../utility/apiCall";
import "./playlist.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function PlayListComponent(props) {
  const { videoDispatch } = useVideoContext();
  const navigate = useNavigate();
  const [playlistContainer, setPlaylistContainer] = useState("");
  async function getPlayListId(id) {
    const response = await getPlaylistById(id);
    videoDispatch({ type: "SET_TEMP_ID", payload: response.playlist });
  }

  async function deletePlaylist(value) {
    const response = await removePlaylist(value);
    videoDispatch({ type: "SET_PLAYLIST", payload: response.playlists });
  }

  return (
    <div className="playlist-item" style={{ display: playlistContainer }}>
      <div className="playlist-name">
        <h1> {props.value.list} </h1>
      </div>
      <div>
        <button
          className="show-playlist"
          onClick={() => {
            getPlayListId(props.value._id);
            navigate("/playlistpage", { state: props.value._id });
          }}
        >
          show content
        </button>
      </div>
      <div>
        <button
          className="show-playlist"
          onClick={() => {
            deletePlaylist(props.value._id);
            setPlaylistContainer("none");
          }}
        >
          delete playlist
        </button>
      </div>
    </div>
  );
}
export { PlayListComponent };
