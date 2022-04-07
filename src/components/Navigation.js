import navimage from "../assets/images/logovideo.png";
import "./navigation.css";
import "./clhome.css";
import { Link } from "react-router-dom";
function Navigation() {
  return (
    <div className="top-section">
      <div className="container-logo">
        <div className="logo">
          <img src={navimage} alt="logo" />{" "}
        </div>
      </div>

      <div className="navbar-items">
        <ul className="navbar-item">
        <li>
          <input type="text" placeholder="Search.."/>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/playlist">Playlist</Link>
          </li>
          <li>
            <Link to="/history">History</Link>
          </li>
          <li>
            <Link to="/likedvideo">Liked Video</Link>
          </li>
          <li>
            <Link to="/watchlater">WatchLater</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          
          <li>
            <Link to="/logout">Logout</Link>
          </li>
          
        </ul>
      </div>
    </div>
  );
}
export { Navigation };
