/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import AdminFoodCard from "../card/AdminFoodCard";
import { Link } from "react-router-dom";
import Nav from "../dashboard/Nav";
import Update from "../Detail/Update";
import { usePosts } from "../../../context/PostProvider";
import firebaseService from "../../../firebase/firebaseService";
import Loading from "../../Loading";

const PostList = () => {
  const { posts, setPosts } = usePosts();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    (async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/posts`);
      const { resource } = await res.json();
      setPosts(resource);
    })();
  }, []);

  const deleteHandler = async (pid, images) => {
    const result = window.confirm("Do you want to delete?");
    if (result) {
      setIsLoading(true);
      const filter = posts.filter((post) => post._id !== pid);
      const token = localStorage.getItem("token");
      await firebaseService.multiple_image_delete(images);
      const res = await fetch(`${process.env.REACT_APP_API_URL}/posts/${pid}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        setPosts(filter);
      }
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
            <section className="p-3 ">
              <div className="container">
                <div className="row my-4">
                  <div className="col-4">
                    <input
                      type="text"
                      className="form-control border-2 border border-dark"
                      placeholder="Search a post"
                    />
                  </div>
                  <div className="col-8">
                    <div className="float-start border p-1 bg-light-gray rounded-3">
                      <p className="fs-6 fw-semibold">
                        Total posts -
                        <span className="fs-5 fw-bold"> {posts.length}</span>
                      </p>
                    </div>

                    <div className="float-end">
                      <div>
                        <select
                          onChange={(e) => {
                            console.log(e.target.value);
                          }}
                          className="btn btn-warning px-4"
                          type="button"
                        >
                          <option value="recent" className="dropdown-item">
                            Recent
                          </option>
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
                  </div>
                </div>

                <div className="row">
                  {posts &&
                    posts.map((post) => {
                      return (
                        <div key={post._id} className="col-3 mb-1 ">
                          <div className="card p-1 bg-secondary-subtle">
                            <AdminFoodCard
                              id={post._id}
                              image={post.image}
                              title={post.title}
                              rating={post.total_rating}
                            />

                            <div className="d-flex justify-content-around">
                              <button
                                className="btn btn-warning"
                                data-bs-toggle="modal"
                                data-bs-target="#update"
                              >
                                Update
                              </button>
                              {/* <Update /> */}

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
                                onClick={() =>
                                  deleteHandler(post._id, post.image)
                                }
                                className="btn btn-danger"
                                // data-bs-toggle="modal"
                                // data-bs-target="#delete"
                              >
                                Delete
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
                                      <button
                                        type="button"
                                        class="btn btn-warning"
                                        data-bs-dismiss="modal"
                                      >
                                        Yes
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
                {isLoading && <Loading />}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PostList;
