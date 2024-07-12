/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../nav/Header";
import Footer from "../nav/Footer";

const Detail = () => {
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

  const { pid } = useParams();
  const [post, setPost] = useState(null);
  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://blog-api-fsw0.onrender.com/api/posts/${pid}`
      );
      const { resource } = await res.json();
      setPost(resource);
    })();
  }, []);
  return (
    <>
      <Header />
      <div className="mt-5">
        <section className="container ">
          <div className="row mb-4">
            <nav aria-label="breadcrumb ">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">
                    <span className="fs-5">Home</span>
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  <span className="fs-5">Detail</span>
                </li>
              </ol>
            </nav>
          </div>

          {/* first row start */}

          {post ? (
            <div className="row mb-5">
              {console.log(post)}
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
                      {post.title}
                    </p>
                    <p>
                      <i className="fa-solid fa-location-dot fs-4 me-4 "></i>
                      {"   "}{" "}
                      <span className="fs-5 fw-semibold">{post.address}</span>
                    </p>
                    <p>
                      <i className="fa-solid fa-clock me-4 fs-4"></i>
                      <span className="fs-5 fw-semibold">
                        {" "}
                        {post.open_hour} : {post.close_hour}
                      </span>
                    </p>
                    <p>
                      <i className="fas fa-phone me-4 fs-4"></i>
                      <span className="fs-5 fw-semibold">{post.phone}</span>
                    </p>
                    <p>
                      <i className="fas fa-star text-warning me-4 fs-4"></i>
                      <span className="fs-4 fw-semibold">
                        {post.total_rating}
                      </span>
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
                              <h1
                                className="modal-title fs-5"
                                id="exampleModalLabel"
                              >
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
                              <p className="text-center fw-bold dark mt-2">
                                {rate}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-2">
                      <form action=""></form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {/* first row end */}

          {/* second row start */}

          <div className="row g-5 mb-5">
            <div className="col-lg-7 col-12 my-auto">
              <div className="">
                <h1 className="fs-2 py-3 text-center brown noto-serif-display-subtitle">
                  2nd Title
                </h1>
                <p className="fs-6 roboto-regular text-sm-center text-lg-start">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci voluptates natus ullam, cumque reiciendis recusandae
                  quidem rem eos ut magni saepe, eum quos labore inventore sunt?
                  Expedita commodi consequatur iusto. Adipisci voluptates natus
                  ullam, cumque reiciendis recusandae quidem rem eos ut magni
                  saepe, eum quos labore inventore sunt? Expedita commodi
                  consequatur iusto.
                </p>
              </div>
            </div>
            <div className="col-lg-5 col-12">
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
            <div className="col-lg-7 col-12">
              <img
                src="https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-100 rounded-4 "
              />
            </div>
            <div className="col-lg-5 col-12 my-auto">
              <h1 className="fs-2  brown  text-center py-3 noto-serif-display-subtitle">
                3rd Title
              </h1>

              <p className="fs-6 roboto-regular text-lg-end text-sm-center ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci voluptates natus ullam, cumque reiciendis recusandae
                quidem rem eos ut magni saepe, eum quos labore inventore sunt?
                Expedita commodi consequatur iusto. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Adipisci voluptates natus ullam,
                cumque reiciendis recusandae quidem rem eos ut magni saepe, eum
                quos labore inventore sunt? Expedita commodi consequatur iusto.
              </p>
            </div>
          </div>
          {/* third row end */}

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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Modi,
                  </p>
                </div>
              </div>
            </section>
          </div>

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

          {/* comment section end */}
        </section>
        <hr />
      </div>
      <Footer />
    </>
  );
};

export default Detail;
