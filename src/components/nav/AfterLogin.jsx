import React from "react";
import { Link } from "react-router-dom";
import profile from "../../assets/profile.jpeg";

const AfterLogin = ({ user, logout }) => {
  return (
    <div>
      <div className="dropstart">
        <button
          className="btn border border-0"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {/* <i className="fa-solid fa-address-card fs-3  brown"></i> */}
          <img
            src={user.image !== "" ? user.image : profile}
            alt=""
            style={{ width: "40px", height: "40px" }}
            className="rounded-circle"
          />
        </button>

        <ul className="dropdown-menu dropdown-menu-dark ">
          <li>
            <Link
              to="/user_profile"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className="dropdown-item"
              type="button"
            >
              Activity
            </Link>
          </li>
          <li>
            <Link to="/user_profile" className="dropdown-item" type="button">
              Bookmark
            </Link>
          </li>
          <li>
            <button onClick={logout} className="dropdown-item">
              Sign Out
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AfterLogin;
