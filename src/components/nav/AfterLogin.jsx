import React from "react";
import { Link } from "react-router-dom";

const AfterLogin = () => {
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
            src="https://plus.unsplash.com/premium_photo-1664870883044-0d82e3d63d99?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
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
