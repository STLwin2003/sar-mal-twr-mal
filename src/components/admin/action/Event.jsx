/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import AdminFoodCard from "../card/AdminFoodCard";
import { Link } from "react-router-dom";
import Nav from "../dashboard/Nav";

const Event = () => {
  let [add, setAdd] = useState(false);

  let Add = () => {
    setAdd(!add);
  };

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
            <section>
              <div className="container-fluid">
                <div className="row my-4 bg-light-gray p-3">
                  <div className="col-5">
                    <input
                      type="text"
                      className="form-control border-black mb-2"
                      placeholder="Enter Event Name"
                    />
                  </div>
                  <div className="col-7">
                    <textarea
                      rows={3}
                      cols={55}
                      placeholder="Add Description"
                      className="rounded-3 p-3 border-black"
                    ></textarea>
                  </div>
                </div>

                <div
                  data-bs-spy="scroll"
                  data-bs-smooth-scroll="true"
                  class=" overflow-scroll"
                  style={{ height: "300px" }}
                  tabindex="0"
                >
                  <div className="row">
                    <div className="col-3">
                      <div className="card p-1">
                        <AdminFoodCard />
                        <div>
                          <button
                            className={
                              add ? "btn btn-warning" : "btn btn-success"
                            }
                            onClick={Add}
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
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
