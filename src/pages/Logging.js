import {useState} from "react";
import "../components/clhome.css";
import {Link} from "react-router-dom";
import imageavtaar from "../assets/images/avatar-the-grinch-green-plant-recycling-symbol-food-transparent-png-1652162.png";
function Logging(){
    
  const [displayLogIn, setDisplayLogIn] = useState("none");
  const [displaySignIn, setDisplaySignIn] = useState("none");
  function clickLogInHandler() {
    if (displayLogIn === "none") setDisplayLogIn("block");
    if (displayLogIn === "block") setDisplayLogIn("none");
  }
  function clickSignInHandler() {
    if (displaySignIn === "none") setDisplaySignIn("block");
    if (displaySignIn === "block") setDisplaySignIn("none");
  }
    return(
        <>
        <div className="header-cart">
      <h1>************ Welcome to Login/Signup ************</h1>
    </div>
        <div className="button-container">
        <button className="login-btn-ecom" onClick={() => clickLogInHandler()}>
          Login
        </button>
        <button
          className="signup-btn-ecom"
          onClick={() => clickSignInHandler()}
        >
          Signup
        </button>
      </div>
      <div
        className="login-container"
        style={{ display: displayLogIn, zIndex: "3" }}
      >
        <form className="login-content login-animate" action="">
          <div className="imgcontainer">
            <span className="close" onClick={clickLogInHandler}>
              &times;
            </span>
            <img
              src={ imageavtaar }
              alt="avataar icon"
              className="avatar"
            />
          </div>

          <div className="container-form">
            <label htmlFor="uname">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="uname"
              required
            />

            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
            />
            <i
              className="fa fa-eye home-fa-eye"
              aria-hidden="true"
              style={{}}
            ></i>

            <button className="submit-btn">Login</button>
          </div>

          <div className="container-form">
            <button className="cancel-btn" onClick={clickLogInHandler}>
              Cancel
            </button>
            <span className="psw">
              Forgot <Link to="#">password?</Link>
            </span>
          </div>
        </form>
      </div>
      <div
        className="login-container"
        style={{ display: displaySignIn }}
      >
        <form className="login-content login-animate" action="">
          <div className="imgcontainer">
            <span
              className="close"
              onClick={clickSignInHandler}
            >
              &times;
            </span>
            <img src={imageavtaar} alt="avatar image icon" className="avatar" />
          </div>

          <div className="container-form">
            <label htmlFor="uname">
              <b>Firstname</b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="fname"
              required
            />

            <label htmlFor="uname">
              <b>Lastname</b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="lname"
              required
            />
            <label htmlFor="uname">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="uname"
              required
            />

            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
            />
            <label htmlFor="psw-repeat">
              <b>Repeat Password</b>
            </label>
            <input
              type="password"
              placeholder="Repeat Password"
              name="psw-repeat"
              required
            />
            <i className="fa fa-eye" aria-hidden="true"></i>
          </div>

          <div className="container-form-button">
            <button className="signup-btn-bottom cancel-btn">Sign Up</button>
            <button
              className="cancel-btn-signup cancel-btn"
              onClick={clickSignInHandler}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
      </>
    )
}
export {Logging}