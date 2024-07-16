/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import FoodCard from "../card/FoodCard";
import PlaceCard from "../card/PlaceCard";
import Header from "../nav/Header";
import Footer from "../nav/Footer";
import { Link } from "react-router-dom";
import { useUser } from "../../context/UserProvider";
import profile from "../../assets/profile.jpeg";

const UserProfile = () => {
  const { user, logout } = useUser();

  return (
    <div>
      <Header />
      {user ? (
        <section>
          <div className="container">
            <section className="w-100 px-4 py-2">
              <div className="row d-flex justify-content-center">
                <div className="col col-md-9 col-lg-9 col-xl-8">
                  <div className="rounded-3">
                    <div className="card-body p-4">
                      <div className="d-flex">
                        <div className="flex-shrink-0 position-relative">
                          <img
                            src={user.image !== "" ? user.image : profile}
                            alt="Generic placeholder image"
                            className="img-fluid rounded-circle"
                            style={{ width: "180px" }}
                          />

                          <div className="position-absolute">
                            <input
                              type="file"
                              accept="image/*"
                              className="btn btn-warning w-75"
                            />
                          </div>
                        </div>
                        <div className="flex-grow-2 ms-5">
                          <h3 className="mb-3">
                            <span className="fw-bold">{user.name}</span>
                            <button
                              data-bs-toggle="modal"
                              data-bs-target="#name"
                              className="border-0 bg-white"
                            >
                              <i className="fa-solid fa-pen-to-square text-warning ms-2"></i>
                            </button>
                            <div
                              className="modal fade"
                              id="name"
                              tabIndex="-1"
                              aria-labelledby="exampleModalLabel"
                              aria-hidden="true"
                            >
                              <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h6
                                      className="modal-title fs-5"
                                      id="exampleModalLabel"
                                    >
                                      Enter your new name
                                    </h6>
                                    <button
                                      type="button"
                                      className="btn-close"
                                      data-bs-dismiss="modal"
                                      aria-label="Close"
                                    ></button>
                                  </div>

                                  <input
                                    type="text"
                                    className="form-control form-control-lg w-75 mx-auto"
                                    value={user.name}
                                  />
                                  <div className="modal-body">
                                    <button className="btn btn-success">
                                      Save Changes
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </h3>
                          <p className="fs-4 fw-medium">{user.email}</p>

                          <div className="d-flex pt-1 my-2">
                            {/* <input
                              type="file"
                              accept="image/*"
                              className="w-50 btn btn-outline-warning me-1"
                            /> */}
                            <button
                              data-bs-toggle="modal"
                              data-bs-target="#email"
                              className="btn btn-secondary me-1"
                            >
                              Change Password
                            </button>
                            <div
                              className="modal fade"
                              id="email"
                              tabIndex="-1"
                              aria-labelledby="exampleModalLabel"
                              aria-hidden="true"
                            >
                              <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                  <div class="modal-header">
                                    <h1
                                      className="modal-title fs-5"
                                      id="exampleModalLabel"
                                    >
                                      Enter your new password
                                    </h1>
                                    <button
                                      type="button"
                                      className="btn-close"
                                      data-bs-dismiss="modal"
                                      aria-label="Close"
                                    ></button>
                                  </div>

                                  <input
                                    type="text"
                                    className="form-control form-control-lg w-75 mx-auto"
                                    value="current password"
                                  />
                                  <div className="modal-body">
                                    <button className="btn btn-success">
                                      Save Changes
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <button
                              onClick={logout}
                              type="button"
                              data-mdb-button-init
                              data-mdb-ripple-init
                              className="btn btn-warning flex-grow-1"
                            >
                              Logout
                            </button>
                          </div>
                          {user.role === "admin" ? (
                            <div className="d-flex justify-content-start rounded-3 bg-body-tertiary">
                              <Link
                                to="/admin_dashboard"
                                className="btn btn-warning"
                              >
                                Switch to Admin{" "}
                                <i className="fa-solid fa-lock"></i>
                              </Link>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/*  profile end */}

            <hr />
            {/* rating list start*/}

            <div className="">
              <p className="fs-3 fw-bold brown noto-serif-display-subtitle mt-5">
                Your Rating Lists
              </p>
              <div className="row my-3 ">
                <div className="col-sm-6 col-md-4 col-lg-2 col-xl-2 ">
                  <FoodCard />
                </div>
                <div className="col-sm-6  col-md-8 col-lg-9 my-auto">
                  <div className="">
                    <div className="mb-3">
                      <span className="fs-5 roboto-regular">Your Rating</span>
                      <i className="fa-solid fa-star fs-4 text-warning ms-3"></i>
                      <span className="fs-4 fw-semibold  roboto-regular ms-2">
                        9.4
                      </span>
                    </div>

                    <p>
                      <i className="fa-solid fa-location-dot me-4 fs-4"></i>
                      <span className="fs-5">Pathein, 10011</span>
                    </p>
                    <p>
                      <i className="fas fa-phone me-4 fs-4"></i>
                      <span className="fs-5">+ 959 765 514 319</span>
                    </p>
                    <div className="fs-6 roboto-regular">
                      <span>29th June, 2024</span> <span>09:23 pm</span>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row my-3 ">
                <div className="col-sm-6 col-md-4 col-lg-2 col-xl-2">
                  <PlaceCard />
                </div>
                <div className="col-sm-6  col-md-8 col-lg-9 my-auto">
                  <div className="">
                    <div className="mb-3">
                      {" "}
                      <span className="fs-5 roboto-regular">Your Rating</span>
                      <i className="fa-solid fa-star fs-4 text-warning ms-3"></i>
                      <span className="fs-4 fw-semibold  roboto-regular ms-2">
                        9.4
                      </span>
                    </div>
                    <p>
                      <i className="fa-solid fa-location-dot me-4 fs-4"></i>
                      <span className="fs-5">Pathein, 10011</span>
                    </p>
                    <p>
                      <i className="fas fa-phone me-4 fs-4"></i>
                      <span className="fs-5">+ 959 765 514 319</span>
                    </p>
                    <div className="fs-6 roboto-regular">
                      <span>29th June, 2024</span> <span>09:23 pm</span>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
            </div>

            {/* rating list end */}

            <hr />

            {/* comment list start */}

            <div>
              <div className="row">
                <p className="fs-3 fw-bold brown noto-serif-display-subtitle mt-3">
                  Your Comment Lists
                </p>

                <div className="row my-2">
                  <div className="col-sm-6 col-md-4 col-lg-2 col-xl-2">
                    <PlaceCard />
                  </div>
                  <div className="col-sm-6 col-md-8 col-lg-9 my-auto">
                    <div className="bg-light-gray rounded-5">
                      <p className="fs-4 roboto-regular p-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facere temporibus quia, exercitationem alias omnis ad
                        nobis
                      </p>
                    </div>
                    <div className="fs-6 roboto-regular">
                      <p>29th June, 2024</p> <p>09:23 pm</p>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            {/* comment list end */}
            <hr />

            {/* bookmark list start */}
            <div>
              <div className="">
                <p className="fs-3 fw-bold brown noto-serif-display-subtitle mt-5">
                  Your Favorite
                </p>
                <div className="row">
                  <div className="row my-3 ">
                    <div className="col-sm-6 col-md-4 col-lg-3 ">
                      <FoodCard />
                    </div>
                    <div className="col-sm-6  col-md-8 col-lg-9 my-auto">
                      <div className="">
                        <p>
                          <i className="fa-solid fa-location-dot me-4 fs-5"></i>
                          <span className="fs-6">Pathein, 10011</span>
                        </p>
                        <p>
                          <i className="fas fa-phone me-4 fs-5"></i>
                          <span className="fs-6">+ 959 765 514 319</span>
                        </p>
                        <p>
                          <i className="fa-solid fa-clock fs-5 me-4"></i>
                          <span className="fs-6"> Opening Hours:</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="row my-3 ">
                    <div className="col-sm-6 col-md-4 col-lg-3 ">
                      <FoodCard />
                    </div>
                    <div className="col-sm-6  col-md-8 col-lg-9 my-auto">
                      <div className="">
                        <p>
                          <i className="fa-solid fa-location-dot me-4 fs-5"></i>
                          <span className="fs-6">Pathein, 10011</span>
                        </p>
                        <p>
                          <i className="fas fa-phone me-4 fs-5"></i>
                          <span className="fs-6">+ 959 765 514 319</span>
                        </p>
                        <p>
                          <i className="fa-solid fa-clock fs-5 me-4"></i>
                          <span className="fs-6"> Opening Hours:</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="row my-3 ">
                    <div className="col-sm-6 col-md-4 col-lg-3 ">
                      <FoodCard />
                    </div>
                    <div className="col-sm-6  col-md-8 col-lg-9 my-auto">
                      <div className="">
                        <p>
                          <i className="fa-solid fa-location-dot me-4 fs-5"></i>
                          <span className="fs-6">Pathein, 10011</span>
                        </p>
                        <p>
                          <i className="fas fa-phone me-4 fs-5"></i>
                          <span className="fs-6">+ 959 765 514 319</span>
                        </p>
                        <p>
                          <i className="fa-solid fa-clock fs-5 me-4"></i>
                          <span className="fs-6"> Opening Hours:</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="row my-3 ">
                    <div className="col-sm-6 col-md-4 col-lg-3 ">
                      <FoodCard />
                    </div>
                    <div className="col-sm-6  col-md-8 col-lg-9 my-auto">
                      <div className="">
                        <p>
                          <i className="fa-solid fa-location-dot me-4 fs-5"></i>
                          <span className="fs-6">Pathein, 10011</span>
                        </p>
                        <p>
                          <i className="fas fa-phone me-4 fs-5"></i>
                          <span className="fs-6">+ 959 765 514 319</span>
                        </p>
                        <p>
                          <i className="fa-solid fa-clock fs-5 me-4"></i>
                          <span className="fs-6"> Opening Hours:</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <hr />
                </div>
              </div>
            </div>
            {/* bookmark list end */}
            <hr />
          </div>
        </section>
      ) : (
        ""
      )}
      <Footer />
    </div>
  );
};

export default UserProfile;
