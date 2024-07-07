import React from "react";
import { NavLink } from "react-router-dom";

const BeforeLogin = () => {
  return (
    <div>
      <NavLink to="/login">
        <button
          className="btn-brown  rounded-3  px-3"
          type="button"
          aria-expanded="false"
        >
          Login
        </button>
      </NavLink>
    </div>
  );
};

export default BeforeLogin;
