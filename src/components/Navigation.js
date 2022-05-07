import navimage from "../assets/images/logovideo.png";
import "./navigation.css";
import "./clhome.css";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/auth-context";
function Navigation() {
  const {isLoggedIn} = useAuth();
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
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/playlist">Playlist</NavLink>
          </li>
          <li>
            <NavLink to="/history">History</NavLink>
          </li>
          <li>
            <NavLink to="/likedvideo">Liked Video</NavLink>
          </li>
          <li>
            <NavLink to="/watchlater">WatchLater</NavLink>
          </li>
          {!isLoggedIn &&

          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
}
{isLoggedIn &&

          <li>
            <NavLink to="/logout">Logout</NavLink>
            
          </li>
}
          
        </ul>
      </div>
    </div>
  );
}
export { Navigation };
