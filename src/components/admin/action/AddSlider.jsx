/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import Nav from "../dashboard/Nav";

const AddSlider = () => {
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
                    <Link to="/user_profile" className="dropdown-item">
                      Back to User
                    </Link>
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
            <section className="">
              <div className="container">
                <h1 className="my-4">Adding slider from admin</h1>
                <div className="bg-light-gray rounded-3 p-5">
                  <div className="row">
                    <div className="col">
                      <input
                        type="file"
                        className="form-contrl"
                        accept="image/*"
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        placeholder="Search a post title for slider"
                        className="form-control border-black"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <button className="btn btn-warning px-4 fs-5">Add</button>
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

export default AddSlider;
