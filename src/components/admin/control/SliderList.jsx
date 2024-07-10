/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import Nav from "../dashboard/Nav";
import SliderItem from "../item/SliderItem";

const SliderList = () => {
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
              <div className="container">
                <div className="row my-3 ">
                  <div className="col d-flex mb-2">
                    <div className="mx-3">
                      <h1 className="">Slider List</h1>
                    </div>
                  </div>
                  <div className="col">
                    <div className=" float-end border p-1 bg-light-gray rounded-3 text-danger">
                      <p className="fs-6 fw-semibold">
                        Total Slider -
                        <span className="fs-5 fw-bold p-2">3</span>
                      </p>
                    </div>
                  </div>
                  <hr />
                </div>
                <SliderItem />
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default SliderList;
