import { useState } from "react";

function Playlist(){
    const [displaySignIn, setDisplaySignIn] = useState("none");
    function clickSignInHandler() {
        if (displaySignIn === "none") setDisplaySignIn("block");
        if (displaySignIn === "block") setDisplaySignIn("none");
      }
    return(
        <>
        <div className="header-cart">
      <h1>************ Welcome to Playlist ************</h1>
    </div>
        <div className="button-container">
        <button onClick className="login-btn-ecom" >
          Create Playlist
        </button>
      </div>
      <div
        id="idsignup"
        className="login-container"
        style={{ display: displaySignIn }}
      >
        <form className="login-content login-animate" action="">
          <div className="imgcontainer">
            <span
              className="close"
              id="close-singup"
              onClick={clickSignInHandler}
            >
              &times;
            </span>
            <img src="" alt="avatar image icon" className="avatar" />
          </div>

          <div className="container-form">
            <label for="uname">
              <b>Firstname</b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="fname"
              required
            />

            <label for="uname">
              <b>Lastname</b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="lname"
              required
            />
            <label for="uname">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="uname"
              required
            />

            <label for="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
            />
            <label for="psw-repeat">
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
              id="cancel-btn-signup"
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
export {Playlist}