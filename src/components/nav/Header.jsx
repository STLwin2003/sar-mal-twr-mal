import React from "react";
import { NavLink } from "react-router-dom";
import BeforeLogin from "./BeforeLogin";
import AfterLogin from "./AfterLogin";

const Header = () => {
  let userStatus = "login";

  let AccountStatus = () => {
    if (userStatus === "signup") {
      return <BeforeLogin />;
    } else {
      return <AfterLogin />;
    }
  };

  return (
    <div className="mb-5">
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top py-2 ">
        <div className="container">
          <NavLink to="/" className="navbar-brand ">
            <span className="brown  fs-1  dancing-script-main">
              SarMalTwrMal
            </span>
          </NavLink>

          <div
            className="offcanvas offcanvas-end  "
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    to="/home"
                    className="nav-link active me-3 "
                    aria-current="page"
                  >
                    <span className="brown">Home</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/street_food_list" className="nav-link me-3 ">
                    <span className="brown">Street Food</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/coffee_shop_list" className="nav-link me-3 ">
                    <span className="brown">Coffee Shop</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/place_list" className="nav-link me-3 ">
                    <span className="brown">Place</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <form className="d-flex ">
            <div
              className="my-auto fs-3 me-4 "
              data-bs-toggle="offcanvas"
              data-bs-target="#searchBar"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>

            {/* acc status section */}
            {AccountStatus()}
            {/* acc status section */}
          </form>
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