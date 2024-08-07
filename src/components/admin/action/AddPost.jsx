/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Nav from "../dashboard/Nav";
import firebaseService from "../../../firebase/firebaseService";
import Loading from "../../../components/Loading";
import { usePosts } from "../../../context/PostProvider";

const AddPost = () => {
  const { posts, setPosts } = usePosts();
  const [images, setImages] = useState([]);
  const [selected, setSelected] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const titleRef = useRef();
  const addressRef = useRef();
  const latitudeRef = useRef();
  const longitudeRef = useRef();
  const phoneRef = useRef();
  const openHourRef = useRef();
  const closeHourRef = useRef();
  const foodRef = useRef();
  const layoutRef = useRef();
  const imageHandler = (e) => {
    if (e.target.files.length < 3 || e.target.files.length > 3) {
      alert("require 3 images");
    }
    setImages(e.target.files);
  };
  const postAddHandler = async () => {
    if (selected === "") {
      alert("need select type!");
      return false;
    }
    const token = localStorage.getItem("token");
    const title = titleRef.current.value;
    const address = addressRef.current.value;
    const latitude = latitudeRef.current.value;
    const longitude = longitudeRef.current.value;
    const phone = phoneRef.current.value;
    const openHour = openHourRef.current.value;
    const closeHour = closeHourRef.current.value;
    const food = foodRef.current.value;
    const layout = layoutRef.current.value;
    const imageUrl = [];
    setIsLoading(true);
    const url = await firebaseService.multiple_upload(images);
    await url.map((u) => imageUrl.push(u.src));
    const res = await fetch(`${process.env.REACT_APP_API_URL}/posts`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        title,
        address,
        phone,
        category: selected,
        open_hour: openHour,
        close_hour: closeHour,
        longitude,
        latitude,
        image: imageUrl,
        product_description: food,
        shop_description: layout,
      }),
    });
    const result = await res.json();
    if (res.ok) {
      setPosts([...posts, result.resource]);
      navigate("/admin/post_list");
    } else {
      alert(result.message);
    }
    setIsLoading(false);
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
            <section className="bg-light-gray rounded-3">
              <div className="container p-4">
                <div className="row">
                  <h1>Add Post from admin</h1>
                </div>
                {isLoading && <Loading />}
                <div className="row">
                  <div className="col">
                    <div className="mb-4">
                      <input
                        ref={titleRef}
                        type="text"
                        name="name"
                        className="form-control border"
                        placeholder="Enter name"
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        ref={addressRef}
                        type="text"
                        name="address"
                        className="form-control border"
                        placeholder="Enter address"
                      />
                    </div>
                    <div className="mb-4 ">
                      <div className="d-flex gap-3">
                        <input
                          ref={latitudeRef}
                          type="text"
                          className="form-control border"
                          placeholder="Enter place Latitude"
                        />
                        <input
                          ref={longitudeRef}
                          type="text"
                          className="form-control border"
                          placeholder="Enter place Longitude"
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <input
                        ref={phoneRef}
                        type="number"
                        name="phone no"
                        className="form-control border"
                        placeholder="Enter Phone no:"
                      />
                    </div>
                    <div className="mb-4 ">
                      <div className="d-flex gap-3">
                        <input
                          ref={openHourRef}
                          type="text"
                          className="form-control border"
                          placeholder="Enter Opening Hour"
                        />
                        <input
                          ref={closeHourRef}
                          type="text"
                          className="form-control border"
                          placeholder="Enter Close Hour"
                        />
                      </div>
                    </div>
                    <div className="mb-4 ">
                      <div className="">
                        <p>Please select 3 images </p>
                        <input
                          onChange={imageHandler}
                          type="file"
                          accept="image/*"
                          multiple
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="mb-4">
                      <div>
                        <select
                          onChange={(e) => {
                            setSelected(e.target.value);
                          }}
                          className="btn btn-warning px-4"
                          type="button"
                        >
                          <option>Select Post Type</option>
                          <option value="street_food" className="dropdown-item">
                            Street food
                          </option>
                          <option value="restaurant" className="dropdown-item">
                            Restaurant
                          </option>
                          <option value="place" className="dropdown-item">
                            Place
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="mb-4">
                      <textarea
                        ref={foodRef}
                        name=""
                        placeholder="Food review area"
                        id=""
                        rows={4}
                        cols={50}
                        className=" rounded p-2"
                      ></textarea>
                    </div>
                    <div className="mb-4">
                      <textarea
                        ref={layoutRef}
                        name=""
                        placeholder="Layout review area"
                        id=""
                        rows={4}
                        cols={50}
                        className=" rounded p-2"
                      ></textarea>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={postAddHandler}
                      className="btn btn-warning px-5"
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

export default AddPost;
