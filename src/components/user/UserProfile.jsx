/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef, useState } from "react";
import FoodCard from "../card/FoodCard";
import PlaceCard from "../card/PlaceCard";
import Header from "../nav/Header";
import Footer from "../nav/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserProvider";
import profile from "../../assets/profile.jpeg";
import firebaseService from "../../firebase/firebaseService";
import Loading from "../Loading";
import moment from "moment";

const UserProfile = () => {
  const navigate = useNavigate();
  const changeNameRef = useRef();
  const changePassRef = useRef();
  const [rating, setRating] = useState([]);
  const { user, logout, setUser } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const [profileUpdate, setProfileUpdate] = useState(false);
  const [profileUrl, setProfileUrl] = useState(null);
  const [bookmarks, setBookmarks] = useState([]);

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
        const { resource } = await res.json();
        if (res.ok) {
          const data = await fetch(`${process.env.REACT_APP_API_URL}/posts`);
          const post = await data.json();
          const posts = post.resource;
          const rating = resource.rating_post;
          const results = rating.map((post) => {
            return posts.find((rate) => rate._id === post.postId);
          });
          const result = results.filter((res) => res !== undefined);
          setRating(result);

          const bookmarks = resource.bookmark.map((bookmark) => {
            return posts.find((post) => post._id === bookmark);
          });

          const filter = bookmarks.filter((bookmark) => bookmark !== undefined);
          setBookmarks(filter);
          setUser(resource);
        }
      }
    })();
  }, [setUser]);

  const profileImageHandler = async (e) => {
    const image = e.target.files[0];
    if (image.size > 5000000) {
      alert("image file size must be 5 MB");
      return false;
    }
    setIsLoading(true);
    const token = localStorage.getItem("token");
    await firebaseService.image_delete(user.image);
    const url = await firebaseService.image_upload(image);
    const res = await fetch(`${process.env.REACT_APP_API_URL}/users`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ image: url }),
    });
    if (res.ok) {
      setProfileUpdate(true);
      setProfileUrl(url);
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
        const { resource } = await res.json();
        if (res.ok) {
          setUser(resource);
        }
      }
    }
    setIsLoading(false);
  };
  const changeButton = async (type, value) => {
    setIsLoading(true);

    const token = localStorage.getItem("token");
    const res = await fetch(`${process.env.REACT_APP_API_URL}/users`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(
        type === "name" ? { name: value } : { password: value }
      ),
    });
    if (res.ok) {
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
        const { resource } = await res.json();
        if (res.ok) {
          setUser(resource);
        }
      }
      if (type === "password") {
        localStorage.removeItem("token");
        navigate("/login");
        window.location.reload();
      }
      changeNameRef.current.value = "";
      changePassRef.current.value = "";
      setIsLoading(false);
    }
  };

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
                          {profileUpdate ? (
                            <img
                              src={profileUrl}
                              alt="Generic placeholder image"
                              // className="img-fluid rounded-circle"
                              style={{
                                width: "180px",
                                height: "180px",
                                objectFit: "cover",
                                objectPosition: "0px 1px",
                                borderRadius: "90px",
                              }}
                            />
                          ) : (
                            <img
                              src={user.image !== "" ? user.image : profile}
                              alt="Generic placeholder image"
                              // className="img-fluid rounded-circle"
                              style={{
                                width: "180px",
                                height: "180px",
                                objectFit: "cover",
                                objectPosition: "0px 1px",
                                borderRadius: "90px",
                              }}
                            />
                          )}

                          <div
                            className="position-absolute bg-warning text-white p-1"
                            style={{
                              bottom: "-35px",
                              right: "35px",
                              borderRadius: "5px",
                            }}
                          >
                            <label
                              style={{ cursor: "pointer" }}
                              htmlFor="profile"
                            >
                              upload profile
                            </label>
                            <input
                              onChange={profileImageHandler}
                              type="file"
                              accept="image/*"
                              hidden
                              id="profile"
                              // className="btn btn-warning w-75"
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
                                    ref={changeNameRef}
                                    type="text"
                                    className="form-control form-control-lg w-75 mx-auto"
                                  />
                                  <div className="modal-body">
                                    <button
                                      onClick={() =>
                                        changeButton(
                                          "name",
                                          changeNameRef.current.value
                                        )
                                      }
                                      className="btn btn-success"
                                      data-bs-dismiss="modal"
                                    >
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
                                    ref={changePassRef}
                                    type="text"
                                    className="form-control form-control-lg w-75 mx-auto"
                                  />
                                  <div className="modal-body">
                                    <button
                                      onClick={() =>
                                        changeButton(
                                          "password",
                                          changePassRef.current.value
                                        )
                                      }
                                      className="btn btn-success"
                                      data-bs-dismiss="modal"
                                    >
                                      Save Changes
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {isLoading && <Loading />}
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
              <hr />
              {rating &&
                rating.map((rate) => {
                  return (
                    <div key={rate._id}>
                      <div className="row my-3 ">
                        <div className="col-sm-6 col-md-4 col-lg-2 col-xl-2">
                          <PlaceCard
                            title={rate.title}
                            image={rate.image}
                            rating={rate.total_rating}
                          />
                        </div>
                        <div className="col-sm-6  col-md-8 col-lg-9 my-auto">
                          <div className="">
                            <div className="mb-3">
                              {" "}
                              <span className="fs-5 roboto-regular">
                                Your Rating
                              </span>
                              <i className="fa-solid fa-star fs-4 text-warning ms-3"></i>
                              <span className="fs-4 fw-semibold  roboto-regular ms-2">
                                {
                                  rate.given_rating.find(
                                    (a) => a.user._id === user._id
                                  ).count
                                }
                              </span>
                            </div>
                            <p>
                              <i className="fa-solid fa-location-dot me-4 fs-4"></i>
                              <span className="fs-5">{rate.address}</span>
                            </p>
                            <p>
                              <i className="fas fa-phone me-4 fs-4"></i>
                              <span className="fs-5">{rate.phone}</span>
                            </p>
                            <div className="fs-6 roboto-regular">
                              <span>
                                {moment(rate.created).format(
                                  "MMMM DD YYYY, h:mm:ss a"
                                )}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr />
                    </div>
                  );
                })}
            </div>

            {/* rating list end */}

            <hr />

            {/* comment list start */}

            {/* <div>
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
            </div> */}
            {/* comment list end */}
            {/* bookmark list start */}
            <div>
              <div className="">
                <p className="fs-3 fw-bold brown noto-serif-display-subtitle mt-5">
                  Your Bookmark
                </p>

                <div className="row">
                  {bookmarks &&
                    bookmarks.map((bookmark) => {
                      return (
                        <div key={bookmark._id}>
                          <div className="row my-3 ">
                            <div className="col-sm-6 col-md-4 col-lg-3 ">
                              <FoodCard
                                pid={bookmark._id}
                                image={bookmark.image}
                                rating={bookmark.total_rating}
                                description={bookmark.product_description}
                              />
                            </div>
                            <div className="col-sm-6  col-md-8 col-lg-9 my-auto">
                              <div className="">
                                <p>
                                  <i className="fa-solid fa-location-dot me-4 fs-5"></i>
                                  <span className="fs-6">
                                    {bookmark.address}
                                  </span>
                                </p>
                                <p>
                                  <i className="fas fa-phone me-4 fs-5"></i>
                                  <span className="fs-6">{bookmark.phone}</span>
                                </p>
                                <p>
                                  <i className="fa-solid fa-clock fs-5 me-4"></i>
                                  <span className="fs-6">
                                    {bookmark.open_hour} : {bookmark.close_hour}
                                  </span>
                                </p>
                              </div>
                              <div className="fs-6 roboto-regular">
                                <span>
                                  {moment(bookmark.created).format(
                                    "MMMM DD YYYY, h:mm:ss a"
                                  )}
                                </span>
                              </div>
                            </div>
                          </div>
                          <hr />
                        </div>
                      );
                    })}
                  {/* <div className="row my-3 ">
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
                  </div> */}

                  {/* <hr /> */}
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
