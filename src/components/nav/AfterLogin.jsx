import React from "react";
import { Link } from "react-router-dom";

const AfterLogin = () => {
  return (
    <div>
      <div className="dropstart">
        <button
          className="  btn-outline-none  rounded-circle border p-2"
          type="submit"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="fa-solid fa-address-card fs-3  brown"></i>
        </button>
        <ul className="dropdown-menu bg-secondary ">
          <li>
            <Link to="/user_profile" className="dropdown-item" type="button">
              Activity
            </Link>
          </li>
          <li>
            <Link to="user_profile" className="dropdown-item" type="button">
              Bookmark
            </Link>
          </li>
          <li>
            <Link to="/" className="dropdown-item" type="button">
              Sign Out
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AfterLogin;
