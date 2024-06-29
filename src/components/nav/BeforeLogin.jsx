import React from "react";
import { Link, NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";

const BeforeLogin = () => {
  return (
    <div>
      {console.log("reach this page")}
      <NavLink to="/signup">
        <button
          className="btn-brown  rounded-3  "
          type="submit"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Sign Up
        </button>
      </NavLink>
    </div>
  );
};

export default BeforeLogin;
