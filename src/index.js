import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { VideoContextProvider } from "./context/video-page-context";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContextProvider } from "./context/auth-context";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <Router>
        <VideoContextProvider>
          <App />
        </VideoContextProvider>
      </Router>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
