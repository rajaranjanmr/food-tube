import { useEffect, useState } from "react";
import { useVideoContext } from "../context/video-page-context";
import { addPlaylist, getPlaylists } from "../utility/apiCall";
import { PlayListComponent } from "../components/PlayListComponent";
import { EmptyPlayListComponent } from "../components/EmptyPlayListComponent";

function Playlist() {
  const { videoState, videoDispatch } = useVideoContext();

  useEffect(() => {
    async function getPlaylistsAll() {
      const response = await getPlaylists();

      videoDispatch({ type: "SET_PLAYLISTS", payload: response.playlists });
    }
    getPlaylistsAll();
  }, [videoDispatch]);

  console.log("its here", videoState.playlists);
  return (
    <>
      <div className="header-cart">
        <h1>************ Welcome to Playlist************</h1>
      </div>
      <div>
        {videoState.playlists.length > 0 ? (
          videoState.playlists.map((x) => {
            return <PlayListComponent value={x} />;
          })
        ) : (
          <EmptyPlayListComponent />
        )}
      </div>
    </>
  );
}
export { Playlist };
