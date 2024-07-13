import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import PostProvider from "./context/PostProvider";
import UserProvider from "./context/UserProvider";
import { GoogleOAuthProvider } from "@react-oauth/google";
const googleId = process.env.REACT_APP_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <PostProvider>
          <GoogleOAuthProvider clientId={`${googleId}`}>
            <App />
          </GoogleOAuthProvider>
        </PostProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
