/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import BeforeLogin from "./BeforeLogin";
import AfterLogin from "./AfterLogin";
import { useUser } from "../../context/UserProvider";

const Header = () => {
  const { user, setUser, logout } = useUser();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      (async () => {
        const user = await fetch(
          `${process.env.REACT_APP_API_URL}/users/verify`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const { data } = await user.json();
        setUser(data.user);
      })();
    }
  }, []);

  let AccountStatus = () => {
    if (user !== null) {
      return <AfterLogin user={user} logout={logout} />;
    } else {
      return <BeforeLogin />;
    }
  };

  return (
    <div className="mb-5">
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top py-2">
        <div className="container ">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRightLabel"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <NavLink
            to="/"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="navbar-brand "
          >
            <span className="brown fs-1 fw-bold dancing-script-main">
              SarMalTwrMal
            </span>
          </NavLink>

          <div
            className="offcanvas offcanvas-top"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div className="offcanvas-header">
              <p className="offcanvas-title fs-2 fw-semibold dancing-script-main brown">
                SarMalTwrMal
              </p>
              <button
                type="button"
                className="btn-close me-2 mt-2"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body mx-auto">
              <ul className="navbar-nav mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    to="/home"
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                    className="nav-link me-3"
                  >
                    <span className="dark fs-6 fw-medium">Home</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/street_food_list"
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                    className="nav-link me-3"
                  >
                    <span className="dark fs-6 fw-medium">Street Food</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/restaurant_list"
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                    className="nav-link me-3"
                  >
                    <span className="dark fs-6 fw-medium">Restaurants</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/place_list"
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                    className="nav-link me-3"
                  >
                    <span className="dark fs-6 fw-medium">Place</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-end">
            <div className="d-flex position-relative">
              <Link
                to="/search"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                className="fs-3 me-2 my-auto "
                type="button"
              >
                <i className="fa-solid fa-magnifying-glass text-warning fs-3 me-2 my-auto "></i>
              </Link>

              {/* acc status section */}
              {AccountStatus()}
              {/* acc status section */}
            </div>
          </div>
        </div>
      </nav>
      <div className="row my-5">
        <div className="col"></div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default Header;
