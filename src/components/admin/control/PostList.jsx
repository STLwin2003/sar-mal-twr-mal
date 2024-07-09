/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import AdminFoodCard from "../card/AdminFoodCard";
import { Link } from "react-router-dom";
import Nav from "../dashboard/Nav";

const PostList = () => {
  return (
    <div>
      <div className="container-fluid">
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
            <section className="p-3 ">
              <div className="container">
                <div className="row my-4">
                  <div className="col-4">
                    <input
                      type="text"
                      className="form-control border-2 border border-dark"
                      placeholder="Search a post"
                    />
                  </div>
                  <div className="col-8">
                    <div className="float-start border p-1 bg-light-gray rounded-3">
                      <p className="fs-6 fw-semibold">
                        Total posts -<span className="fs-5 fw-bold">123</span>
                      </p>
                    </div>
                    <div className="float-end">
                      <div className="dropdown">
                        <button
                          className="btn btn-warning dropdown-toggle px-4"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Filter
                        </button>
                        <ul className="dropdown-menu dropdown-menu-dark">
                          <li>
                            <a className="dropdown-item" href="#">
                              A to Z
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Recent
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-4">
                    <AdminFoodCard />
                  </div>
                  <div className="col-4">
                    <AdminFoodCard />
                  </div>
                  <div className="col-4">
                    <AdminFoodCard />
                  </div>
                  <div className="col-4">
                    <AdminFoodCard />
                  </div>
                  <div className="col-4">
                    <AdminFoodCard />
                  </div>
                  <div className="col-4">
                    <AdminFoodCard />
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PostList;
