/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Nav from "../dashboard/Nav";
import { usePosts } from "../../../context/PostProvider";
import firebaseService from "../../../firebase/firebaseService";
import Loading from "../../Loading";
import { useAdmin } from "../../../context/AdminProvider";

const AddSlider = () => {
  const searchRef = useRef();
  const { posts } = usePosts();
  const navigate = useNavigate();
  const { carousel, setCarousel } = useAdmin();
  const [post, setPost] = useState(null);
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const searchHandler = (key) => {
    const find = posts.find((post) => post.title === key);
    setPost(find);
  };
  const imageHandler = (e) => {
    if (e.target.files[0].size > 5000000) {
      alert("image file size must be 5 MB");
      return false;
    }
    setImage(e.target.files[0]);
  };
  const uploadHandler = async (image, post) => {
    if (!post || !image) {
      alert("require data");
      return false;
    }
    setIsLoading(true);
    const token = localStorage.getItem("token");
    const url = await firebaseService.carousel_image_upload(image);
    const res = await fetch(`${process.env.REACT_APP_API_URL}/posts/carousel`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        title: post.title,
        pid: post._id,
        image: url,
      }),
    });
    const { resource } = await res.json();
    if (res.ok) {
      setCarousel([...carousel, resource]);
      setIsLoading(false);
      navigate("/admin/slider_list");
    }
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
            {isLoading && <Loading />}
            <section className="">
              <div className="container">
                <h1 className="my-4">Adding slider from admin</h1>
                <div className="bg-light-gray rounded-3 p-5">
                  <div className="row">
                    <div className="col">
                      <input
                        onChange={imageHandler}
                        type="file"
                        className="form-control"
                        accept="image/*"
                      />
                    </div>
                    <div className="col">
                      <div className="d-flex gap-2">
                        <input
                          ref={searchRef}
                          type="text"
                          placeholder="Search a post title for slider"
                          className="form-control border-black"
                        />
                        <button
                          onClick={() => searchHandler(searchRef.current.value)}
                          className="btn btn-primary"
                        >
                          Search
                        </button>
                      </div>
                      <div className="container mt-3">
                        <p>{post && post.title}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <button
                      onClick={() => uploadHandler(image, post)}
                      className="btn btn-warning px-4 fs-5"
                    >
                      Add
                    </button>
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

export default AddSlider;
