/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import AdminFoodCard from "../card/AdminFoodCard";
import { Link } from "react-router-dom";
import Nav from "../dashboard/Nav";

const Event = () => {
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
            <section>
              <div className="container-fluid">
                <h1>Add Event from Admin</h1>
                <div className="row my-4">
                  <div className="col-5">
                    <input
                      type="text"
                      className="form-control border-3"
                      placeholder="Enter Event Name"
                    />
                  </div>
                </div>

                <div className="row bg-light-gray rounded">
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
                <hr />
                {/* post list here */}
                <div>
                  <h1>Post List here</h1>
                  <div className="row">
                    <div className="col-4">
                      <AdminFoodCard />
                      <button className="btn btn-warning mb-2">
                        Add Event
                      </button>
                    </div>
                    <div className="col-4">
                      <AdminFoodCard />
                      <button className="btn btn-warning mb-2">
                        Add Event
                      </button>
                    </div>
                    <div className="col-4">
                      <AdminFoodCard />
                      <button className="btn btn-warning mb-2">
                        Add Event
                      </button>
                    </div>
                    <hr />
                    <div className="col-4">
                      <AdminFoodCard />
                      <button className="btn btn-warning mb-2">
                        Add Event
                      </button>
                    </div>
                    <div className="col-4">
                      <AdminFoodCard />
                      <button className="btn btn-warning mb-2">
                        Add Event
                      </button>
                    </div>
                    <div className="col-4">
                      <AdminFoodCard />
                      <button className="btn btn-warning mb-2">
                        Add Event
                      </button>
                    </div>
                    <hr />
                    <div className="col-4">
                      <AdminFoodCard />
                      <button className="btn btn-warning mb-2">
                        Add Event
                      </button>
                    </div>
                    <div className="col-4">
                      <AdminFoodCard />
                      <button className="btn btn-warning mb-2">
                        Add Event
                      </button>
                    </div>
                    <div className="col-4">
                      <AdminFoodCard />
                      <button className="btn btn-warning mb-2">
                        Add Event
                      </button>
                    </div>
                    <hr />
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

export default Event;
