/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAdmin } from "../../../context/AdminProvider";
import { usePosts } from "../../../context/PostProvider";

const Nav = () => {
  const {
    comments,
    setComments,
    users,
    setUsers,
    rating,
    setRating,
    carousel,
    setCarousel,
  } = useAdmin();
  const { posts, setPosts } = usePosts();
  useEffect(() => {
    (async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/users/comment`);
      const { resource } = await res.json();
      if (res.ok) {
        setComments(resource);
      }
    })();
    (async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/users/list`);
      const { resource } = await res.json();
      if (res.ok) setUsers(resource);
    })();
    (async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/posts`);
      const { resource } = await res.json();
      setPosts(resource);
    })();
    (async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/posts`);
      const { resource } = await res.json();
      setPosts(resource);
      const filterPosts = resource.filter((post) => {
        return post.given_rating !== 0;
      });
      let data = [];
      if (filterPosts) {
        await filterPosts.map((post) =>
          data.push({
            id: post._id,
            rate: post.given_rating,
            title: post.title,
          })
        );
      }
      await setRating(data);
    })();
    (async () => {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/posts/carousel/list`
      );
      const { resource } = await res.json();
      setCarousel(resource);
    })();
  }, [setComments, setUsers, setPosts, setRating, setCarousel]);
  return (
    <div>
      <div className="">
        <div className="">
          <nav className=" bg-light pe-3 ">
            <h1 className="h4 text-center py-3 text-primary">
              <i className="fa-solid fa-ghost me-3"></i>
              <span className="d-none d-lg-inline"> Ghost Admin </span>
            </h1>
            <div className="list-group text-center text-lg-start">
              <span className="d-none d-lg-block list-group-item disabled">
                <small>CONTROLLS</small>
              </span>

              <Link
                to="/admin_dashboard"
                className="list-group-item list-group-item-action"
              >
                <i className="fa-solid fa-home pe-2"></i>
                <span className="d-none d-lg-inline">Dashboard</span>
              </Link>
              <Link
                to="/admin/user_list"
                className="list-group-item list-group-item-action"
              >
                <i className="fa-solid fa-users pe-2"></i>
                <span className="d-none d-lg-inline">Users</span>
                <span className="d-none d-lg-inline badge bg-danger rounded-pill float-end">
                  {users.length}
                </span>
              </Link>
              <Link
                to="/admin/post_list"
                className="list-group-item list-group-item-action"
              >
                <i class="fa-regular fa-address-card pe-2"></i>
                <span className="d-none d-lg-inline">Posts</span>
                <span className="d-none d-lg-inline badge bg-primary rounded-pill float-end">
                  {posts.length}
                </span>
              </Link>
              <Link
                to="/admin/comment_list"
                className="list-group-item list-group-item-action"
              >
                <i class="fa-regular fa-comment pe-2"></i>
                <span className="d-none d-lg-inline">Comments</span>
                <span className="d-none d-lg-inline badge bg-warning rounded-pill float-end">
                  {comments.length}
                </span>
              </Link>
              <Link
                to="/admin/rating_list"
                className="list-group-item list-group-item-action"
              >
                <i className="fa-solid fa-star pe-2"></i>
                <span className="d-none d-lg-inline">Ratings</span>
                <span className="d-none d-lg-inline badge bg-success rounded-pill float-end">
                  {rating.length}
                </span>
              </Link>
              <Link
                to="/admin/slider_list"
                className="list-group-item list-group-item-action"
              >
                <i class="fa-solid fa-sliders me-2"></i>
                <span className="d-none d-lg-inline">Sliders</span>
                <span className="d-none d-lg-inline badge bg-primary rounded-pill float-end">
                  {carousel.length}
                </span>
              </Link>
            </div>

            <div className="list-group mt-4 text-center text-lg-start">
              <span className="d-none d-lg-block list-group-item disabled">
                <small>ACTIONS</small>
              </span>

              <Link
                to="/admin/add_post"
                className="list-group-item list-group-item-action"
              >
                <i class="fa-regular fa-credit-card pe-2"></i>
                <span className="d-none d-lg-inline">New Post</span>
              </Link>

              <Link
                to="/admin/event"
                className="list-group-item list-group-item-action"
              >
                <i class="fa-solid fa-calendar-day pe-2"></i>
                <span className="d-none d-lg-inline">Add Events</span>
              </Link>
              <Link
                to="/admin/add_slider"
                className="list-group-item list-group-item-action"
              >
                <i class="fa-solid fa-sliders me-2"></i>

                <span className="d-none d-lg-inline">Add Slider</span>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Nav;
