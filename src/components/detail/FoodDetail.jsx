/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../nav/Header";
import Footer from "../nav/Footer";
import Map, { Marker } from "react-map-gl";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { ThreeDots } from "react-loader-spinner";
import profile from "../../assets/profile.jpeg";
import { useUser } from "../../context/UserProvider";

const Detail = () => {
  let [favorite, setFavorite] = useState(false);
  const commentRef = useRef();
  const { user, setUser } = useUser();
  const [status, setStatus] = useState(false);
  const token = localStorage.getItem("token");
  const { pid } = useParams();
  const [post, setPost] = useState(null);
  const [changeRating, setChangeRating] = useState(0);
  const [checkRating, setCheckRating] = useState(false);
  let [rate, setRate] = useState();
  let ratingTxt = ["Very Bad", "Bad", "Good", "Great", "Very Good"];

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem("token");
      const user = await fetch(
        `${process.env.REACT_APP_API_URL}/users/verify`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { data } = await user.json();
      if (user.ok) {
        const res = await fetch(
          `${process.env.REACT_APP_API_URL}/users/?id=${data.user._id}`
        );
        const user = await res.json();
        setUser(user.resource);
        if (res.ok) {
          const find = user.resource.rating_post.find((p) => p.postId === pid);
          if (find) {
            setCheckRating(true);
          }
        }
        const res2 = await fetch(
          `${process.env.REACT_APP_API_URL}/posts/${pid}`
        );
        const { resource } = await res2.json();
        if (res2.ok) {
          const bookmark = await resource.bookmark.find(
            (p) => p === user.resource._id
          );
          if (bookmark) setFavorite(true);
        }
        setPost(resource);
      }
    })();
  }, [status]);

  let fav = async (id) => {
    const token = localStorage.getItem("token");
    if (!favorite) {
      await fetch(`${process.env.REACT_APP_API_URL}/users/${id}/add-bookmark`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } else {
      // ${process.env.REACT_APP_API_URL}/users/${id}/remove-bookmark
      // await fetch(`http://localhost:4000/api/users/${id}/remove-bookmark`, {
      //   method: "PUT",
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      // });
      alert("this is error");
    }
    // setFavorite(!favorite);
  };

  let rating = async (e) => {
    const count = Number(e + 1);

    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/users/${pid}/give-rating`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ count }),
      }
    );
    const { resource } = await res.json();
    if (res.ok) {
      setChangeRating(resource.total_rating);
      setCheckRating(true);
    }
    setRate(ratingTxt[e]);
  };

  const commentHandler = async () => {
    const comment = commentRef.current.value;
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/users/${pid}/comment`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ comment }),
      }
    );
    if (res.ok) {
      setStatus(!status);
      commentRef.current.value = "";
    }
  };
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
            <>
              <div className="row mb-5">
                <div className="col text-start">
                  <img src={post.image[0]} alt="" className="w-100 rounded-4" />
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
                          {changeRating === 0
                            ? post.total_rating
                            : changeRating}
                        </span>
                      </p>
                      <div className="mb-2">
                        <button
                          className="btn btn-outline-warning"
                          onClick={() => fav(post._id)}
                        >
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
                      {!checkRating && (
                        <button
                          className="btn btn-warning"
                          data-bs-toggle="modal"
                          data-bs-target="#rating"
                        >
                          <span className="fs-5 ps-2">Give Rating</span>
                          <i className="fa-solid fa-star mx-3 fs-4"></i>
                        </button>
                      )}
                      <div className="mb-2">
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

              {/* first row end */}

              {/* second row start */}

              <div className="row g-5 mb-5">
                <div className="col-lg-7 col-12 my-auto">
                  <div className="">
                    <h1 className="fs-2 py-3 text-center brown noto-serif-display-subtitle">
                      2nd Title
                    </h1>
                    <p className="fs-6 roboto-regular text-sm-center text-lg-start">
                      {post.product_description}
                    </p>
                  </div>
                </div>
                <div className="col-lg-5 col-12">
                  <div className="float-end">
                    <img
                      src={post.image[1]}
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
                    src={post.image[2]}
                    alt=""
                    className="w-100 rounded-4 "
                  />
                </div>
                <div className="col-lg-5 col-12 my-auto">
                  <h1 className="fs-2  brown  text-center py-3 noto-serif-display-subtitle">
                    3rd Title
                  </h1>

                  <p className="fs-6 roboto-regular text-lg-end text-sm-center ">
                    {post.shop_description}
                  </p>
                </div>
              </div>
              {/* third row end */}

              {/* map area start */}
              <div>
                <section style={{ height: "400px" }} className="bg-dark">
                  <Map
                    mapLib={maplibregl}
                    initialViewState={{
                      longitude: post.longitude,
                      latitude: post.latitude,
                      zoom: 17,
                    }}
                    style={{ width: "100%", height: "100%" }}
                    mapStyle="https://api.maptiler.com/maps/basic-v2/style.json?key=RcMIqGrUMIGrXnUhbmK2"
                  >
                    {/* <NavigationControl position="top-left" /> */}
                    <Marker
                      longitude={post.longitude}
                      latitude={post.latitude}
                      color="#61dbfb"
                    />
                  </Map>
                </section>
              </div>
              {/* map area end */}
              {/* comment section start */}

              <div className="row mb-5">
                {post.comment.map((p) => {
                  return (
                    <section key={p._id} className="my-3">
                      <div className="col-2">
                        <button className="btn ">
                          <img
                            src={
                              p.commenter.image === ""
                                ? profile
                                : p.commenter.image
                            }
                            alt=""
                            className="rounded-circle"
                            width={"50px"}
                          />
                        </button>
                        <span className="fs-6 roboto-regular mx-2">
                          {p.commenter.name}
                        </span>
                      </div>
                      <div className="col-8">
                        <div className="border bg-light-gray rounded-5 ms-5">
                          <p className="fs-6 roboto-regular p-3">{p.comment}</p>
                        </div>
                      </div>
                    </section>
                  );
                })}
              </div>

              <div className="row mb-5">
                <div className="col-lg-5 col-sm-0"></div>
                <div className="col-lg-7 col-sm-12">
                  <div className="float-end d-flex">
                    <textarea
                      ref={commentRef}
                      rows={3}
                      className="form-control-lg rounded-4 border-2 px-4"
                      placeholder="Enter your comment"
                    ></textarea>
                    <div>
                      <button
                        onClick={commentHandler}
                        className="btn btn-warning px-4 mx-2 my-auto"
                      >
                        <span className="fs-5">Submit</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mb-5"></div>

              {/* comment section end */}
            </>
          ) : (
            <div className="d-flex justify-content-center  ">
              <div>
                <ThreeDots
                  visible={true}
                  height="120"
                  width="120"
                  color="#4fa94d"
                  radius="9"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
                <p className="text-center">Loading...</p>
              </div>
            </div>
          )}
        </section>
        <hr />
      </div>
      <Footer />
    </>
  );
};

export default Detail;
