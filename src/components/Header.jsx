/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top py-3">
        <div className="container">
          <NavLink to="/" className="navbar-brand  fs-2 " href="#">
            <span className="brown">SarMalTwrMal</span>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
              {/* <li className="nav-item">
                <NavLink to="" className="nav-link me-2 ">
                  <span className="brown">Contact</span>
                </NavLink>
              </li> */}
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2 fw-semibold"
                type="search"
                placeholder="Search . . . "
                aria-label="Search"
              />
              <Link to="/detail">
                <button className=" btn-brown rounded-3  me-2" type="submit">
                  <span>Login</span>
                </button>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
