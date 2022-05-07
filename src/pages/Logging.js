import { useState, useEffect } from "react";
import "../components/clhome.css";
import { users } from "../backend/db/users";
import { useLocation, useNavigate, Navigate, Link } from "react-router-dom";
import imageavtaar from "../assets/images/avatar-the-grinch-green-plant-recycling-symbol-food-transparent-png-1652162.png";
import { useAuth } from "../context/auth-context";
import { Toast } from "../components/Toast";
import {
  loginHandler,
  signupHandler,
} from "../backend/controllers/AuthController";
import { loginuser, signupuser } from "../utility/apiCall";
function Logging() {
  const [displayLogIn, setDisplayLogIn] = useState("none");
  const [displaySignIn, setDisplaySignIn] = useState("none");
  const [toastMessage, setToastMessage] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPwd, setSignupPwd] = useState("");
  const [signupPwdR, setSignupPwdR] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [message, setMessage] = useState("");
  function clickLogInHandler() {
    if (displayLogIn === "none") setDisplayLogIn("block");
    if (displayLogIn === "block") setDisplayLogIn("none");
  }
  const { isLoggedIn, setLogIn } = useAuth();
  function clickSignInHandler() {
    if (displaySignIn === "none") setDisplaySignIn("block");
    if (displaySignIn === "block") setDisplaySignIn("none");
  }
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    async function defaultClickHanlders() {
      const response = await signupuser(users.email, users.password);
      localStorage.setItem("token", response.token);
    }
    defaultClickHanlders();
  }, []);
  async function defaultClickHanlder() {
    const response = await loginuser(users.email, users.password);
    localStorage.setItem("token", response.token);
    if (localStorage.getItem("token")) setLogIn(true);
    location?.state?.from?.pathname === undefined
      ? navigate("/")
      : navigate(location?.state?.from?.pathname);
  }
  async function signupClickHandler(e) {
    e.preventDefault();
    if (signupPwd === signupPwdR) {
      const response = await signupuser(signupEmail, signupPwd);
      localStorage.setItem("token", response.token);
      console.log(response, "heeeee");
      if (response.success) {
        clickSignInHandler();
        setMessage("you are signed up");
      } else {
        alert("wrong password/email");
      }
    }
    if (localStorage.getItem("token")) setLogIn(true);
    console.log(location?.state?.from?.pathname === undefined);
    location?.state?.from?.pathname === undefined
      ? navigate("/")
      : navigate(location?.state?.from?.pathname);
  }
  async function loginClickHandler(e) {
    e.preventDefault();
    const response = await loginuser(signupEmail, signupPwd);
    localStorage.setItem("token", response.token);
    if (response.success) {
      setTimeout(() => clickLogInHandler(), 3000);
      setMessage("you are logged in");
    }
    if (localStorage.getItem("token")) setLogIn(true);
    // navigate(location?.state?.from?.pathname);
    location?.state?.from?.pathname === undefined
      ? navigate("/")
      : navigate(location?.state?.from?.pathname);
  }
  return (
    <>
      <div className="header-cart">
        <h1>************ Welcome to Login/Signup ************</h1>
      </div>

      <div className="button-container-main">
        <button className="login-btn-ecom" onClick={() => clickLogInHandler()}>
          Login
        </button>
        <button
          className="signup-btn-ecom"
          onClick={() => {
            clickSignInHandler();
          }}
        >
          Signup
        </button>
        <button
          className="signup-btn-ecom"
          onClick={() => {
            defaultClickHanlder();
          }}
        >
          Login as Default
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
            <img src={imageavtaar} alt="avataar icon" className="avatar" />
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
              onChange={(e) => setSignupEmail(e.target.value)}
            />

            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
              onChange={(e) => setSignupPwd(e.target.value)}
            />
            <i
              className="fa fa-eye home-fa-eye"
              aria-hidden="true"
              style={{}}
            ></i>

            <button className="submit-btn" onClick={loginClickHandler}>
              Login
            </button>
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
      <div className="login-container" style={{ display: displaySignIn }}>
        <form className="login-content login-animate" action="">
          <div className="imgcontainer">
            <span className="close" onClick={clickSignInHandler}>
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
              onChange={(e) => setfirstName(e.target.value)}
            />

            <label htmlFor="uname">
              <b>Lastname</b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="lname"
              required
              onChange={(e) => setlastName(e.target.value)}
            />
            <label htmlFor="uname">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="uname"
              required
              onChange={(e) => setSignupEmail(e.target.value)}
            />

            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
              onChange={(e) => setSignupPwd(e.target.value)}
            />
            <label htmlFor="psw-repeat">
              <b>Repeat Password</b>
            </label>
            <input
              type="password"
              placeholder="Repeat Password"
              name="psw-repeat"
              required
              onChange={(e) => setSignupPwdR(e.target.value)}
            />
            <i className="fa fa-eye" aria-hidden="true"></i>
          </div>

          <div className="container-form-button">
            <button
              className="signup-btn-bottom cancel-btn"
              onClick={signupClickHandler}
            >
              Sign Up
            </button>
            <button
              className="cancel-btn-signup cancel-btn"
              onClick={() => clickSignInHandler()}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export { Logging };
