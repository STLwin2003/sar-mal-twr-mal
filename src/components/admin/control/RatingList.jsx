/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import RatingItem from "../item/RatingItem";
import { Link } from "react-router-dom";
import Nav from "../dashboard/Nav";
import { useAdmin } from "../../../context/AdminProvider";
import { usePosts } from "../../../context/PostProvider";

const RatingList = () => {
  const { setPosts } = usePosts();
  // const { setTotalRating } = useAdmin();
  const { rating, setRating } = useAdmin();

  useEffect(() => {
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
      // await setTotalRating(data);
    })();
  }, []);

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
            <section className="p-3">
              <div className="row mb-3 ">
                <div className="col d-flex mb-2">
                  <div className="mx-3">
                    <h1 className="">Rating List</h1>
                  </div>
                </div>
                <div className="col">
                  <div className=" float-end border p-1 bg-light-gray rounded-3">
                    <p className="fs-6 fw-semibold">
                      Total Rating Posts -
                      <span className="fs-5 fw-bold p-2">{rating.length}</span>
                    </p>
                  </div>
                </div>
                <hr />
              </div>

              <div className="accordion accordion-flush" id="item1">
                {rating && <RatingItem rating={rating} id={"item1"} />}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default RatingList;
