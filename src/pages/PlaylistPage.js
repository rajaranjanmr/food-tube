import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { EmptyPlayListComponent } from "../components/EmptyPlayListComponent";
import PlaylistComponentCard from "../components/PlaylistComponentCard";
import { useVideoContext } from "../context/video-page-context";
import {
  addToSpecificPlaylist,
  getAllVideos,
  getPlaylistById,
} from "../utility/apiCall";
import ShowPlaylistContent from "./ShowPlaylistContent";

function PlaylistPage() {
  const { videoState, videoDispatch } = useVideoContext();
  const location = useLocation();
  const [playlistName,setPlaylistName] = useState("");

  useEffect(() => {
    async function getSinglePlayListId(id) {
      const response = await getPlaylistById(id);
      videoDispatch({type: "SET_PLAYLISTS", payload: response.playlist})
    }
    getSinglePlayListId(location.state);
  }, []);
  useEffect(()=>{
    setPlaylistName(videoState?.playlists?.list);

  },[videoState])

  return (
    <>
    <div className="header-cart">
    <h1>************ Welcome to Playlist - {playlistName} ************</h1>
    </div>
    <div className="cards-video">

          {(videoState.playlists?.videos?.length > 0) ? videoState.playlists?.videos?.map((x) => {
            return  <ShowPlaylistContent value={{val:x,playlist_id:location.state}}/>
          }):<EmptyPlayListComponent/>}
          </div>
        </>    
  );
}
export default PlaylistPage;