/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../nav/Header";
import Footer from "../nav/Footer";

const Detail = () => {
  const { pid } = useParams();
  const [post, setPost] = useState(null);
  useEffect(() => {
    (async () => {
      const res = await fetch(`http://localhost:4000/api/posts/${pid}`);
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
                      <i className="fa-solid fa-location-dot fs-4 me-4"></i>
                      {"   "} <span className="fs-5">{post.address}</span>
                    </p>
                    <p>
                      <i className="fa-solid fa-clock me-4 fs-4"></i>
                      <span className="fs-5">
                        {" "}
                        {post.open_hour} : {post.close_hour}
                      </span>
                    </p>
                    <p>
                      <i className="fas fa-phone me-4 fs-4"></i>
                      <span className="fs-5">{post.phone}</span>
                    </p>
                    <p>
                      <i className="fas fa-star text-warning me-4 fs-4"></i>
                      <span className="fs-4 fw-semibold">
                        {post.total_rating}
                      </span>
                    </p>
                    <div className="mb-2">
                      <button className="btn-brown">
                        <span className="fs-5 ps-2">Add Favorite</span>
                        <i className="fa-solid fa-heart fs-4 mx-3"></i>
                      </button>
                    </div>
                    <div className="mb-2">
                      {/* <button
                    className="btn btn-outline-warning"
                    data-bs-toggle="modal"
                    data-bs-target="#rating"
                  >
                    <i className="fa-solid fa-star me-2 fs-4"></i>
                    <i className="fa-solid fa-star me-2 fs-4"></i>
                    <i className="fa-solid fa-star me-2 fs-4"></i>
                    <i className="fa-solid fa-star me-2 fs-4"></i>

                    <i className="fa-solid fa-star me-2 fs-4"></i>
                  </button> */}
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
            <div className="col-lg-7 col-sm-6 my-auto">
              <div className="">
                <h1 className="fs-2 py-3 text-center brown noto-serif-display-subtitle">
                  2nd Title
                </h1>
                <p className="fs-5 roboto-regular text-sm-center text-lg-start">
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

          {/* comment section start */}

          <div className="row mb-5">
            <section className="my-3">
              <div className="col-2">
                <button className="btn btn-warning rounded-circle ">
                  <i className="fa-regular fa-user"></i>
                </button>
                <span className="fs-6 roboto-regular mx-2">User</span>
              </div>
              <div className="col-8">
                <div className="border bg-light-gray rounded-5">
                  <p className="fs-5 roboto-regular p-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Modi,
                  </p>
                </div>
              </div>
            </section>
            <section className="my-3">
              <div className="col-2">
                <button className="btn btn-warning rounded-circle ">
                  <i className="fa-regular fa-user"></i>
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
                  <i className="fa-regular fa-user"></i>
                </button>
                <span className="fs-6 roboto-regular mx-2">User</span>
              </div>
              <div className="col-8">
                <div className="border bg-light-gray rounded-5">
                  <p className="fs-5 roboto-regular p-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Modi, quam ex ut id ipsam facere recusandae est nihil fugiat
                    laboriosam maxime. Explicabo, nisi? Aliquid vel perferendis
                    illum deserunt nemo repellendus!
                  </p>
                </div>
              </div>
            </section>
            <section className="my-3">
              <div className="col-2">
                <button className="btn btn-warning rounded-circle ">
                  <i className="fa-regular fa-user"></i>
                </button>
                <span className="fs-6 roboto-regular mx-2">User</span>
              </div>
              <div className="col-8">
                <div className="border bg-light-gray rounded-5">
                  <p className="fs-5 roboto-regular p-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Modi, quam ex ut id ipsam facere recusandae est nihil fugiat
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
                  className="form-control-lg rounded-3 border-2 px-4"
                  placeholder="Enter your comment"
                ></textarea>
                <button className="btn-brown px-5 m-3">
                  <span className="fs-5">Submit</span>
                </button>
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
