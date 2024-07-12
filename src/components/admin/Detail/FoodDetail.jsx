/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import Nav from "../dashboard/Nav";
import Update from "./Update";

const Detail = () => {
  return (
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
            <div className="mt-5">
              <section className="container ">
                <div className="row">
                  <p className="fs-5 fw-semibold">
                    Date : <span>12/7/2024</span>
                  </p>

                  <p className="fs-5 fw-semibold">
                    Time : <span>10:00 pm</span>
                  </p>
                </div>

                {/* first row start */}

                <div className="row mb-5">
                  <div className="col text-start">
                    <img
                      src="https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      className="w-100 rounded-4"
                    />
                  </div>
                  <div className="col my-auto">
                    <div className="row">
                      <div className="col-2"></div>
                      <div className="col-10 text-start ">
                        <p className="fs-2 brown fw-bold noto-serif-display-subtitle">
                          This is Title
                        </p>
                        <p>
                          <i className="fa-solid fa-location-dot fs-4 me-4"></i>
                          {"   "} <span className="fs-5">Pathein, 10011</span>
                        </p>
                        <p>
                          <i className="fa-solid fa-clock me-4 fs-4"></i>
                          <span className="fs-5"> Opening Hours:</span>
                        </p>
                        <p>
                          <i className="fas fa-phone me-4 fs-4"></i>
                          <span className="fs-5">+ 959 765 514 319</span>
                        </p>
                        <p>
                          <i className="fas fa-star text-warning me-4 fs-4"></i>
                          <span className="fs-4 fw-semibold">9.4</span>
                        </p>
                        <div className="mb-2">
                          <button
                            to="/admin_dashboard"
                            className="btn btn-warning me-2"
                            data-bs-toggle="modal"
                            data-bs-target="#update"
                          >
                            <span className="fs-5 px-2">Update</span>
                            <i className="fa-regular fa-pen-to-square"></i>
                          </button>
                          {/* <button
                          className="btn btn-warning"
                          data-bs-toggle="modal"
                          data-bs-target="#update"
                        >
                          Update
                        </button>
                        <Update /> */}

                          <div
                            class="modal fade "
                            id="update"
                            aria-hidden="true"
                            aria-labelledby="exampleModalToggleLabel"
                            tabindex="-1"
                          >
                            <div className="modal-dialog  modal-fullscreen">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h1
                                    className="modal-title fs-5"
                                    id="exampleModalToggleLabel"
                                  >
                                    Update
                                  </h1>
                                  <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  ></button>
                                </div>
                                <div className="modal-body">
                                  <Update />
                                </div>
                              </div>
                            </div>
                          </div>
                          <button
                            className="btn btn-danger"
                            data-bs-toggle="modal"
                            data-bs-target="#delete"
                          >
                            <span className="fs-5 px-2">Delete</span>
                            <i className="fa-solid fa-trash"></i>
                          </button>

                          <div
                            class="modal fade"
                            id="delete"
                            data-bs-backdrop="static"
                            data-bs-keyboard="false"
                            tabindex="-1"
                            aria-labelledby="staticBackdropLabel"
                            aria-hidden="true"
                          >
                            <div class="modal-dialog modal-dialog-centered">
                              <div class="modal-content">
                                <div class="modal-body">
                                  <p className="fs-5 fw-semibold">
                                    Do you want to delete?
                                  </p>
                                </div>
                                <div class="modal-footer">
                                  <button
                                    type="button"
                                    class="btn btn-success"
                                    data-bs-dismiss="modal"
                                  >
                                    Cancel
                                  </button>
                                  <button type="button" class="btn btn-warning">
                                    Yes
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* first row end */}

                {/* second row start */}

                <div className="row g-5 mb-5">
                  <div className="col-lg-7 col-sm-6 my-auto">
                    <div className="">
                      <h1 className="fs-2 py-3 text-center brown noto-serif-display-subtitle">
                        2nd Title
                      </h1>
                      <p className="fs-6 text-dark roboto-regular text-sm-center text-lg-start">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Adipisci voluptates natus ullam, cumque reiciendis
                        recusandae quidem rem eos ut magni saepe, eum quos
                        labore inventore sunt? Expedita commodi consequatur
                        iusto. Adipisci voluptates natus ullam, cumque
                        reiciendis recusandae quidem rem eos ut magni saepe, eum
                        quos labore inventore sunt? Expedita commodi consequatur
                        iusto.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-5 col-sm-6 ">
                    <div className="float-end">
                      <img
                        src="https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="w-100 rounded-4"
                      />
                    </div>
                  </div>
                </div>

                {/* second row end */}

                {/* third row start */}
                <div className="row g-5 mb-5">
                  <div className="col-lg-7 col-sm-6">
                    <img
                      src="https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      className="w-100 rounded-4 "
                    />
                  </div>
                  <div className="col-lg-5 col-sm-6 my-auto">
                    <h1 className="fs-2  brown  text-center py-3 noto-serif-display-subtitle">
                      3rd Title
                    </h1>

                    <p className="fs-6 text-dark roboto-regular text-lg-end text-sm-center ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Adipisci voluptates natus ullam, cumque reiciendis
                      recusandae quidem rem eos ut magni saepe, eum quos labore
                      inventore sunt? Expedita commodi consequatur iusto. Lorem
                      ipsum dolor sit amet consectetur adipisicing elit.
                      Adipisci voluptates natus ullam, cumque reiciendis
                      recusandae quidem rem eos ut magni saepe, eum quos labore
                      inventore sunt? Expedita commodi consequatur iusto.
                    </p>
                  </div>
                </div>
                {/* third row end */}

                <div>
                  <section style={{ height: "400px" }} className="bg-dark">
                    <p className="text-white">map area</p>
                  </section>
                </div>

                {/* comment section start */}

                <div className="row mb-5">
                  <section className="my-3">
                    <div className="col-2">
                      <button className="btn ">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                          alt=""
                          className="rounded-circle"
                          width={"50px"}
                        />
                      </button>
                      <span className="fs-6 roboto-regular mx-2">User</span>
                    </div>
                    <div className="col-8">
                      <div className="border bg-light-gray rounded-5 ms-5">
                        <p className="fs-6 roboto-regular p-3">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Modi,
                        </p>
                      </div>
                    </div>
                  </section>
                </div>

                {/* comment section end */}
              </section>
              <hr />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Detail;
