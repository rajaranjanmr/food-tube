import { useEffect, useState } from "react";
import "../components/clhome.css";
import "../components/playlist.css";
import { useVideoContext } from "../context/video-page-context";
import {
  addPlaylist,
  addToHistory,
  addToLikedVideos,
  addToSpecificPlaylist,
  addToWatchLater,
  deleteFromSpecificPlaylist,
  getPlaylists,
  removeFromLikedVideos,
} from "../utility/apiCall";
import "./dropdown.css";
import "../components/modal.css";

function VideoListingPage(props) {
  const [displayStyle, setDisplayStyle] = useState("none");
  const { videoState, videoDispatch } = useVideoContext();
  const [playlistName, setPlaylistName] = useState({ list: "" });
  async function addToSpecificPlaylistOnCall(videoData, playlistId) {
    const response = await addToSpecificPlaylist(videoData, playlistId);
    videoDispatch({ type: "SET_TEMP_ID", payload: response.playlist });
  }
  async function deleteFromSpecificPlaylistOnCall(playlist_id, video_id) {
    const response = await deleteFromSpecificPlaylist(playlist_id, video_id);
    videoDispatch({ type: "SET_TEMP_ID", payload: response.playlist });
  }

  useEffect(() => {
    async function getPlay() {
      const response = await getPlaylists();
      videoDispatch({ type: "SET_PLAYLISTS", payload: response.playlists });
    }
    getPlay();
  }, [videoDispatch]);
  async function addToPlayList(event, playlistName) {
    event.preventDefault();
    const response = await addPlaylist(playlistName);
    videoDispatch({ type: "SET_PLAYLISTS", payload: response.playlists });
  }
  function modalClickHandler() {
    setDisplayStyle("block");
  }

  function playClickHandler(value) {
    const addHistory = async () => {
      const response = await addToHistory(value);
      videoDispatch({ type: "SET_HISTORY", payload: response.history });
    };
    addHistory();
  }
  async function watchClickHandler(value) {
    const response = await addToWatchLater(value);
    videoDispatch({ type: "SET_WATCHLATER", payload: response.watchlater });
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
    <>
      <div
        className="modal-container login-container"
        style={{ display: displayStyle }}
      >
        <form className="login-content login-animate" action="">
          <div className="imgcontainer">
            <span className="close" onClick={() => setDisplayStyle("none")}>
              &times;
            </span>
          </div>

          <div className="container-form">
            <ul className="playlist-list-container">
              {videoState.playlists.length > 0
                ? videoState.playlists.map((x, index) => {
                    return (
                      <li className="playlist-list-item" key={index}>
                        <div>
                          <input
                            type="checkbox"
                            name={x.list}
                            onChange={(e) => {
                              if (e.target.checked) {
                                addToSpecificPlaylistOnCall(props.value, x._id);
                              } else if (!e.target.checked) {
                                deleteFromSpecificPlaylistOnCall(
                                  x._id,
                                  props.value._id
                                );
                              }
                            }}
                          />
                          <label htmlFor={x.list}>
                            {x.list}
                            {}
                          </label>
                        </div>
                      </li>
                    );
                  })
                : ""}
            </ul>

            <input
              type="text"
              placeholder="Enter Playlist name"
              name="uname"
              onChange={(e) => {
                setPlaylistName({ list: e.target.value });
              }}
              required
              className="input-playlist"
            />

            <button
              className="submit-btn"
              onClick={(event) => addToPlayList(event, playlistName)}
            >
              create new
            </button>
          </div>
        </form>
      </div>

      <div className="card">
        <img className="thumbnail" src={props.value.image} alt="biryani" />
        <div className="title-video">{props.value.title}</div>
        <div className="description-video">{props.value.description}</div>
        <div className="channel-name">{props.value.channel}</div>

        <div class="quantity-up-down">
          {props.value.creator} | {}
          <div className="like">
            <i
              class="fa fa-thumbs-up"
              onClick={() => likedClickHandler(props.value)}
            >
              2.3k
            </i>
          </div>
          <div className="dislike">
            <i
              class="fa fa-thumbs-down"
              onClick={() => unlikeClickedHandler(props.value._id)}
            >
              3.k
            </i>
          </div>
        </div>
        <div className="timestamp">{props.value.postDate} &nbsp; | &nbsp;</div>
        <div className="card-btn-add">
          <p>
            <button
              className="videolisting"
              onClick={() => playClickHandler(props.value)}
            >
              Play
            </button>
          </p>
          <p>
            <div className="dropdown">
              <button className="videolisting dropbtn">More</button>
              <div className="dropdown-content">
                <div className="add-to-watch-later">
                  <button onClick={() => watchClickHandler(props.value)}>
                    watchlater
                  </button>
                </div>
                <div className="add-to-playlist">
                  <button
                    onClick={() => {
                      modalClickHandler();
                    }}
                  >
                    playlist
                  </button>
                </div>
              </div>
            </div>
          </p>
        </div>
      </div>
    </>
  );
}
export { VideoListingPage };
