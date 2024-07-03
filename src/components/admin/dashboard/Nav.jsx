/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div className="">
        <div className="">
          <nav className=" bg-light pe-3 ">
            <h1 className="h4 text-center py-3 text-primary">
              <i className="fa-solid fa-ghost me-3"></i>
              <span className="d-none d-lg-inline"> Ghost Admin </span>
            </h1>
            <div className="list-group text-center text-lg-start">
              <span className="d-none d-lg-block list-group-item disabled">
                <small>CONTROLLS</small>
              </span>

              <Link
                to="/admin_dashboard"
                className="list-group-item list-group-item-action"
              >
                <i className="fa-solid fa-home pe-2"></i>
                <span className="d-none d-lg-inline">Dashboard</span>
              </Link>
              <Link
                to="/admin/user_list"
                className="list-group-item list-group-item-action"
              >
                <i className="fa-solid fa-users pe-2"></i>
                <span className="d-none d-lg-inline">Users</span>
                <span className="d-none d-lg-inline badge bg-danger rounded-pill float-end">
                  20
                </span>
              </Link>
              <Link
                to="/admin/post_list"
                className="list-group-item list-group-item-action"
              >
                <i class="fa-regular fa-address-card pe-2"></i>
                <span className="d-none d-lg-inline">Posts</span>
                <span className="d-none d-lg-inline badge bg-primary rounded-pill float-end">
                  20
                </span>
              </Link>
              <Link
                to="/admin/comment_list"
                className="list-group-item list-group-item-action"
              >
                <i class="fa-regular fa-comment pe-2"></i>
                <span className="d-none d-lg-inline">Comments</span>
                <span className="d-none d-lg-inline badge bg-warning rounded-pill float-end">
                  12
                </span>
              </Link>
              <Link
                to="/admin/rating_list"
                className="list-group-item list-group-item-action"
              >
                <i className="fa-solid fa-star pe-2"></i>
                <span className="d-none d-lg-inline">Ratings</span>
                <span className="d-none d-lg-inline badge bg-success rounded-pill float-end">
                  65
                </span>
              </Link>
              <Link
                to="/admin_dashboard"
                className="list-group-item list-group-item-action"
              >
                <i className="fa-solid fa-flag pe-2"></i>
                <span className="d-none d-lg-inline">Reports</span>
              </Link>
            </div>

            <div className="list-group mt-4 text-center text-lg-start">
              <span className="d-none d-lg-block list-group-item disabled">
                <small>ACTIONS</small>
              </span>

              <Link
                to="/admin/add_post"
                className="list-group-item list-group-item-action"
              >
                <i class="fa-regular fa-credit-card pe-2"></i>
                <span className="d-none d-lg-inline">New Post</span>
              </Link>

              <Link
                to="/admin/event"
                className="list-group-item list-group-item-action"
              >
                <i className="fa-solid fa-calender-alt"></i>
                <span className="d-none d-lg-inline">Add Events</span>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Nav;
