import "./App.css";
import {Home} from "./pages/Home"
import { Routes, Route } from "react-router-dom";
import {Navigation} from "./components/Navigation"
import {Playlist} from "./pages/Playlist"
import {Logout} from "./pages/Logout"
import MockAPI from "./components/Mockman";
import {VideoListing} from './pages/VideoListing'
import { History } from "./pages/History";
import { WatchLater } from "./pages/WatchLater";
import { Logging } from "./pages/Logging";
import { LikedVideo } from "./pages/LikedVideo";
import PlaylistPage from "./pages/PlaylistPage";
import { RequiresAuth } from "./RequiresAuth";
import { useAuth } from "./context/auth-context";

function App() {
  const {isLoggedIn} = useAuth();
  return (
    <div className="App">
      <Navigation/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/playlist" element={
        <RequiresAuth>
      <Playlist />
      </RequiresAuth>
      } />
      <Route path="/logout" element={
      <Logout />
      } />
      <Route path="/mockman" element={<MockAPI />} />
      <Route path="/videolisting" element={<VideoListing />} />
      <Route path="/history" element={
        <RequiresAuth>
      <History />
      </RequiresAuth>
      } />
      <Route path="/watchlater" element={
        <RequiresAuth>
      <WatchLater />
      </RequiresAuth>
      } />
      <Route path="/login" element={<Logging/>} />
      <Route path="/likedvideo" element={
        <RequiresAuth>
      <LikedVideo/>
      </RequiresAuth>
      } />
      <Route path="/playlistpage" element={<PlaylistPage/>} />
      </Routes>
    </div>
  );
}

export default App;
