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
          <NavLink to="/" className="navbar-brand ">
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
                  <NavLink to="/home" className="nav-link me-3">
                    <span className="dark fs-6 fw-medium">Home</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/street_food_list" className="nav-link me-3">
                    <span className="dark fs-6 fw-medium">Street Food</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/coffee_shop_list" className="nav-link me-3">
                    <span className="dark fs-6 fw-medium">Coffee Shop</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/place_list" className="nav-link me-3">
                    <span className="dark fs-6 fw-medium">Place</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-end">
            <div className="d-flex position-relative">
              <a
                className="fs-3 me-2 my-auto "
                type="button"
                data-bs-toggle="modal"
                href="#search"
              >
                <i className="fa-solid fa-magnifying-glass text-warning fs-3 me-2 my-auto "></i>
              </a>
              <div
                className="modal fade"
                id="search"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <input type="text" placeholder="Search food or place" />
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body"></div>
                  </div>
                </div>
              </div>

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
