/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import Nav from "../dashboard/Nav";

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
            <div className="mt-5">
              <section className="container ">
                <div className="row mb-4"></div>

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
                          <i class="fa-solid fa-location-dot fs-4 me-4"></i>
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
                          <button className="btn-brown">
                            <span className="fs-5 ps-2">Add Favorite</span>
                            <i class="fa-solid fa-heart fs-4 mx-3"></i>
                          </button>
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
                      <p className="fs-5 roboto-regular text-sm-center text-lg-start">
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

                    <p className="fs-5 roboto-regular text-lg-end text-sm-center ">
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

                {/* comment section start */}

                <div className="row mb-5">
                  <section className="my-3">
                    <div className="col-2">
                      <button className="btn btn-warning rounded-circle ">
                        <i class="fa-regular fa-user"></i>
                      </button>
                      <span className="fs-6 roboto-regular mx-2">User</span>
                    </div>
                    <div className="col-8">
                      <div className="border bg-light-gray rounded-5">
                        <p className="fs-5 roboto-regular p-3">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Modi,
                        </p>
                      </div>
                    </div>
                  </section>
                  <section className="my-3">
                    <div className="col-2">
                      <button className="btn btn-warning rounded-circle ">
                        <i class="fa-regular fa-user"></i>
                      </button>
                      <span className="fs-6 roboto-regular mx-2">User</span>
                    </div>
                    <div className="col-8">
                      <div className="border bg-light-gray rounded-5">
                        <p className="fs-5 roboto-regular p-3">
                          Lorem ipsum dolor sit amet consectetur
                        </p>
                      </div>
                    </div>
                  </section>
                  <section className="my-3">
                    <div className="col-2">
                      <button className="btn btn-warning rounded-circle ">
                        <i class="fa-regular fa-user"></i>
                      </button>
                      <span className="fs-6 roboto-regular mx-2">User</span>
                    </div>
                    <div className="col-8">
                      <div className="border bg-light-gray rounded-5">
                        <p className="fs-5 roboto-regular p-3">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Modi, quam ex ut id ipsam facere recusandae est
                          nihil fugiat laboriosam maxime. Explicabo, nisi?
                          Aliquid vel perferendis illum deserunt nemo
                          repellendus!
                        </p>
                      </div>
                    </div>
                  </section>
                  <section className="my-3">
                    <div className="col-2">
                      <button className="btn btn-warning rounded-circle ">
                        <i class="fa-regular fa-user"></i>
                      </button>
                      <span className="fs-6 roboto-regular mx-2">User</span>
                    </div>
                    <div className="col-8">
                      <div className="border bg-light-gray rounded-5">
                        <p className="fs-5 roboto-regular p-3">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Modi, quam ex ut id ipsam facere recusandae est
                          nihil fugiat
                        </p>
                      </div>
                    </div>
                  </section>
                </div>

                <div className="row mb-5"></div>

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
