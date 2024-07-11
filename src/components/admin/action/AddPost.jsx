/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
import Nav from "../dashboard/Nav";

const AddPost = () => {
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
            <section className="bg-light-gray rounded-3">
              <div className="container p-4">
                <div className="row">
                  <h1>Add Post from admin</h1>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="mb-4">
                      <input
                        type="text"
                        name="name"
                        className="form-control border"
                        placeholder="Enter name"
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="text"
                        name="address"
                        className="form-control border"
                        placeholder="Enter address"
                      />
                    </div>
                    <div className="mb-4 ">
                      <div className="d-flex gap-3">
                        <input
                          type="text"
                          className="form-control border"
                          placeholder="Enter place Latitude"
                        />
                        <input
                          type="text"
                          className="form-control border"
                          placeholder="Enter place Longitude"
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <input
                        type="number"
                        name="phone no"
                        className="form-control border"
                        placeholder="Enter Phone no:"
                      />
                    </div>
                    <div className="mb-4 ">
                      <div className="d-flex gap-3">
                        <input
                          type="text"
                          className="form-control border"
                          placeholder="Enter Opening Hour"
                        />
                        <input
                          type="text"
                          className="form-control border"
                          placeholder="Enter Close Hour"
                        />
                      </div>
                    </div>
                    <div className="mb-4 ">
                      <div className="">
                        <p>Please select 3 images </p>
                        <input type="file" accept="image/*" multiple />
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="mb-4">
                      <div className="dropdown">
                        <button
                          className="btn btn-warning dropdown-toggle px-4"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Choose Category
                        </button>
                        <ul className="dropdown-menu dropdown-menu-dark">
                          <li>
                            <a className="dropdown-item" href="#">
                              Food
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Place
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mb-4">
                      <textarea
                        name=""
                        placeholder="Food review area"
                        id=""
                        rows={4}
                        cols={50}
                        className=" rounded p-2"
                      ></textarea>
                    </div>
                    <div className="mb-4">
                      <textarea
                        name=""
                        placeholder="Layout review area"
                        id=""
                        rows={4}
                        cols={50}
                        className=" rounded p-2"
                      ></textarea>
                    </div>
                  </div>
                  <div>
                    <button className="btn btn-warning px-5">Add</button>
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

export default AddPost;
