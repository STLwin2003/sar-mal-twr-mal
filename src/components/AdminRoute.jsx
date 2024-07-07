/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Nav from "./admin/dashboard/Nav";
import { Route, Routes } from "react-router";
import AdminLogin from "./admin/AdminLogin";
import AdminSignup from "./admin/AdminSignup";
import AddPost from "./admin/action/AddPost";
import Event from "./admin/action/Event";

import Dashboard from "./admin/Dashboard";
import UserList from "./admin/control/UserList";
import PostList from "./admin/control/PostList";
import RatingList from "./admin/control/RatingList";
import CommentList from "./admin/control/CommentList";
import { Link } from "react-router-dom";

const AdminRoute = () => {
  return (
    <div>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-2 position-fixed">
            <Nav />
          </div>
          <main className="col-10 position-absolute top-0 end-0">
            {/* top nav start */}

            <nav className="navbar navbar-expand-lg navbar-light bg-light-gray">
              <div className="flex-fill"></div>

              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <Link
                    to=""
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    <i className="fa-solid fa-user-circle"></i>
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li className="dropdown-item">User Profile</li>
                    <li className="dropdown-item">Logout</li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    <i className="fa-solid fa-cog"></i>
                  </a>
                </li>
              </ul>
            </nav>
            <section className="p-3">
              <Routes>
                <Route path="/admin_dashboard" element={<Dashboard />} />
                <Route path="/admin_login" element={<AdminLogin />} />
                <Route path="/admin_signup" element={<AdminSignup />} />
                <Route path="/admin/add_post" element={<AddPost />} />
                <Route path="/admin/event" element={<Event />} />
                <Route path="/admin/user_list" element={<UserList />} />
                <Route path="/admin/post_list" element={<PostList />} />
                <Route path="/admin/rating_list" element={<RatingList />} />
                <Route path="/admin/comment_list" element={<CommentList />} />
              </Routes>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminRoute;