/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../dashboard/Nav";
import Loading from "../../../components/Loading";
import { usePosts } from "../../../context/PostProvider";
import { useAdmin } from "../../../context/AdminProvider";

const Event = () => {
  const eventName = useRef();
  const { setEvent } = useAdmin();
  const eventDescription = useRef();
  let [add, setAdd] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { posts } = usePosts();
  const [postId, setPostId] = useState([]);

  let Add = (id) => {
    let pid = [...postId, id];
    setPostId(pid);
    setAdd(!add);
  };
  const uploadHandler = async (title, description) => {
    const token = localStorage.getItem("token");
    setIsLoading(true);
    const res = await fetch(`${process.env.REACT_APP_API_URL}/campaign`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ title, description, post: postId }),
    });
    const { resource } = await res.json();
    if (res.ok) {
      eventDescription.current.value = "";
      eventName.current.value = "";
      setPostId("");
      setEvent(resource);
      setIsLoading(false);
      alert("event done");
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
            <section>
              <div className="container-fluid">
                <div className="row my-4 bg-light-gray p-3">
                  <div className="col-5">
                    <input
                      ref={eventName}
                      type="text"
                      className="form-control border-black mb-2"
                      placeholder="Enter Event Name"
                    />
                  </div>
                  <div className="col-7">
                    <textarea
                      ref={eventDescription}
                      rows={3}
                      cols={55}
                      placeholder="Add Description"
                      className="rounded-3 p-3 border-black"
                    ></textarea>
                  </div>
                </div>

                <div
                  data-bs-spy="scroll"
                  data-bs-smooth-scroll="true"
                  class=" overflow-scroll"
                  style={{ height: "300px" }}
                  tabindex="0"
                >
                  <div className="row">
                    {posts.map((post) => {
                      return (
                        <div key={post._id} className="col-3">
                          <div className="card p-1">
                            <img
                              src={post.image}
                              alt=""
                              width={"fit-content"}
                              height={100}
                              style={{ objectFit: "contain" }}
                            />
                            <p className="text-center mt-1 ">{post.title}</p>
                            <div>
                              <button
                                style={{ width: "100%" }}
                                className={
                                  add ? "btn btn-warning" : "btn btn-success"
                                }
                                onClick={() => Add(post._id)}
                              >
                                Add
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              {isLoading && <Loading />}
            </section>
            <button
              onClick={() =>
                uploadHandler(
                  eventName.current.value,
                  eventDescription.current.value
                )
              }
              className="btn btn-primary mt-3"
            >
              upload
            </button>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Event;
