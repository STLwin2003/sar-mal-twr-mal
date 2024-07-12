import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../nav/Header";
import Footer from "../nav/Footer";

const PlaceDetail = () => {
  let [favorite, setFavorite] = useState(false);

  let fav = () => {
    setFavorite(!favorite);
  };

  let ratingTxt = ["Very Bad", "Bad", "Good", "Great", "Very Good"];

  let [rate, setRate] = useState();

  let rating = (e) => {
    console.log(ratingTxt[e]);

    setRate(ratingTxt[e]);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row mb-4">
          <nav aria-label="breadcrumb ">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">
                  <span className="fs-5">Home</span>
                </Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/place_list">
                  <span className="fs-5">Place List</span>
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                <span className="fs-5">Detail</span>
              </li>
            </ol>
          </nav>
        </div>
        <div className="row my-3">
          <div className="col-lg-6">
            <p className="fs-2 fw-bold brown noto-serif-display-subtitle">
              Pathein Park
            </p>
            <p>
              <i className="fa-solid fa-location-dot fs-4 me-4"></i>{" "}
              <span className="fs-5">Pathein, 10011</span>
            </p>
            <p>
              <i className="fa-solid fa-clock me-4 fs-4"></i>
              <span className="fs-5"> Opening Hours:</span>
            </p>
            <p>
              <i className="fas fa-star text-warning me-4 fs-4"></i>
              <span className="fs-4 fw-semibold">9.4</span>
            </p>
            <div className="mb-2">
              <button className="btn btn-outline-warning" onClick={fav}>
                <span className="fs-5 ps-2">
                  {favorite ? "Favorite" : "Add Favorite"}
                </span>
                <i
                  className={
                    favorite
                      ? "fa-solid fa-heart fs-4 mx-3"
                      : "fa-solid fa-heart fs-4 mx-3 text-dark"
                  }
                ></i>
              </button>
            </div>
            <div className="mb-2">
              <button
                className="btn btn-warning"
                data-bs-toggle="modal"
                data-bs-target="#rating"
              >
                <span className="fs-5 ps-2">Give Rating</span>
                <i className="fa-solid fa-star mx-3 fs-4"></i>
              </button>
              <div
                className="modal fade modal-box"
                id="rating"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-sm  modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Your Rating
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body mx-auto">
                      <div>
                        <i
                          className={
                            rate === "Very Bad"
                              ? "fa-solid fa-star me-2 fs-1 text-warning "
                              : "fa-solid fa-star me-2 fs-1 text-dark"
                          }
                          onClick={() => rating(0)}
                        ></i>
                        <i
                          className={
                            rate === "Bad"
                              ? "fa-solid fa-star me-2 fs-1 text-warning"
                              : "fa-solid fa-star me-2 fs-1 text-dark"
                          }
                          onClick={() => rating(1)}
                        ></i>
                        <i
                          className={
                            rate === "Good"
                              ? "fa-solid fa-star me-2 fs-1 text-warning"
                              : "fa-solid fa-star me-2 fs-1 text-dark"
                          }
                          onClick={() => rating(2)}
                        ></i>
                        <i
                          className={
                            rate === "Great"
                              ? "fa-solid fa-star me-2 fs-1 text-warning"
                              : "fa-solid fa-star me-2 fs-1 text-dark"
                          }
                          onClick={() => rating(3)}
                        ></i>
                        <i
                          className={
                            rate === "Very Good"
                              ? "fa-solid fa-star me-2 fs-1 text-warning"
                              : "fa-solid fa-star me-2 fs-1 text-dark"
                          }
                          onClick={() => rating(4)}
                        ></i>
                      </div>
                      <p className="text-center fw-bold dark mt-2">{rate}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="fs-6 roboto-regular">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              sequi id autem perspiciatis fugit ipsum cumque dolor nulla, ut
              officiis temporibus laborum ea tempore! Aspernatur, dolor tenetur.
              Cumque, dolores sunt.
            </p>
          </div>
          <div className="col-lg-6 mx-auto">
            <img
              src="https://images.unsplash.com/photo-1714466330772-097c1f9c43cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGxhY2VzfGVufDB8fDB8fHww"
              alt=""
              className=" w-100 rounded-5  "
            />
          </div>
        </div>
        <div className="row my-5">
          <div className="col-lg-5">
            <img
              src="https://images.unsplash.com/photo-1714466330772-097c1f9c43cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGxhY2VzfGVufDB8fDB8fHww"
              alt=""
              className=" w-100 rounded-3 "
            />
            <p className="fs-6 roboto-regular my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              odio alias asperiores repudiandae perspiciatis, dolore enim ab
              dolor impedit veritatis a incidunt quaerat. Nesciunt pariatur
              totam vero rem ipsum unde!
            </p>
          </div>
          <div className="col-lg-7">
            <img
              src="https://images.unsplash.com/photo-1714466330772-097c1f9c43cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGxhY2VzfGVufDB8fDB8fHww"
              alt=""
              className=" w-100 rounded-3 "
            />
          </div>
        </div>
        {/* map area start */}
        <div>
          <section style={{ height: "400px" }} className="bg-dark">
            <p className="text-white">map area</p>
          </section>
        </div>
        {/* map area end */}
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* comment section end */}
        <div className="row mb-5">
          <div className="col-lg-5 col-sm-0"></div>
          <div className="col-lg-7 col-sm-12">
            <div className="float-end d-flex">
              <textarea
                rows={3}
                className="form-control-lg rounded-4 border-2 px-4"
                placeholder="Enter your comment"
              ></textarea>
              <div>
                <button className="btn btn-warning px-4 mx-2 my-auto">
                  <span className="fs-5">Submit</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5"></div>
      </div>
      <hr />
      <Footer />
    </div>
  );
};

export default PlaceDetail;
