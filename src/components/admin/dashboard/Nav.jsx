/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="col-2 bg-light pe-3">
      <h1 className="h4 text-center py-3 text-primary">
        <i className="fa-solid fa-ghost me-3"></i>
        <span className="d-none d-lg-inline"> Ghost Admin </span>
      </h1>
      <div className="list-group text-center text-lg-start">
        <span className="d-none d-lg-block list-group-item disabled">
          <small>CONTROLLS</small>
        </span>

        <a href="" className="list-group-item list-group-item-action">
          <i className="fa-solid fa-home"></i>
          <span className="d-none d-lg-inline">Dashboard</span>
        </a>
        <a href="" className="list-group-item list-group-item-action">
          <i className="fa-solid fa-users"></i>
          <span className="d-none d-lg-inline">Users</span>
          <span className="d-none d-lg-inline badge bg-danger rounded-pill float-end">
            20
          </span>
        </a>
        <a href="" className="list-group-item list-group-item-action">
          <i className="fa-solid fa-chart-line"></i>
          <span className="d-none d-lg-inline">Statistics</span>
        </a>
        <a href="" className="list-group-item list-group-item-action">
          <i className="fa-solid fa-flag"></i>
          <span className="d-none d-lg-inline">Reports</span>
        </a>
      </div>

      <div className="list-group mt-4 text-center text-lg-start">
        <span className="d-none d-lg-block list-group-item disabled">
          <small>ACTIONS</small>
        </span>

        <Link to="/add_post" className="list-group-item list-group-item-action">
          <i class="fa-regular fa-credit-card pe-2"></i>
          <span className="d-none d-lg-inline">New Post</span>
        </Link>
        <a href="" className="list-group-item list-group-item-action">
          <i class="fa-solid fa-arrow-trend-up pe-2"></i>
          <span className="d-none d-lg-inline">Trend Post</span>
        </a>
        <a href="" className="list-group-item list-group-item-action">
          <i className="fa-solid fa-calender-alt"></i>
          <span className="d-none d-lg-inline">Add Events</span>
        </a>
      </div>
    </nav>
  );
};

export default Nav;
