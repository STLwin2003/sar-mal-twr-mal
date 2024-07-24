import React, { useEffect, useRef, useState } from "react";
import Footer from "../nav/Footer";

import PlaceCard from "../card/PlaceCard";
import { useNavigate } from "react-router-dom";
import { usePosts } from "../../context/PostProvider";

const Search = () => {
  let searchData = useRef();
  const navigate = useNavigate();
  const { posts, setPosts } = usePosts();
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    (async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/posts`);
      const { resource } = await res.json();
      setPosts(resource);
    })();
  }, [setPosts]);
  let clearSearch = () => {
    searchData.current.value = "";
    setSearchValue("");
  };
  const searchHandler = (value) => {
    setSearchValue(value);
  };

  return (
    <div>
      {/* <Header /> */}

      <div className="my-3">
        <div className="container">
          <div className="row mb-4">
            <div className="col-lg-8 col-9">
              <div className="position-relative">
                <input
                  type="text"
                  ref={searchData}
                  onChange={(e) => searchHandler(e.target.value)}
                  placeholder="Search a food or place"
                  className="form-control border-2 border-black"
                />
                <div className="position-absolute top-0 end-0">
                  <button
                    className="border-0 bg-white mt-2 me-2"
                    onClick={clearSearch}
                  >
                    <i className="fa-solid fa-xmark fs-4 text-dark"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-2 my-auto">
              <p className="my-auto">
                <span
                  onClick={() => navigate(-1)}
                  className="fs-5 fw-semibold roboto-regular user-select-none"
                >
                  Cancel
                </span>
              </p>
            </div>
          </div>

          {/* search data area start */}

          {/* <div className="row my-3">
            <p className="fs-3 fw-semibold noto-serif-display-subtitle mb-4">
              Search result for <span className="text-warning">(keyword)</span>
            </p>
            <div className="col-6 col-md-4 col-lg-3">
              <PlaceCard />
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <PlaceCard />
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <PlaceCard />
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <PlaceCard />
            </div>
          </div> */}

          {/* search data area end */}

          <div className="my-3">
            <p className="fs-3 fw-bold brown noto-serif-display-subtitle my-4">
              All Posts
            </p>
            <div className="row">
              {posts &&
                posts
                  .filter((post) => {
                    return searchValue.toLowerCase() === ""
                      ? post
                      : post.title.toLowerCase().includes(searchValue);
                  })
                  .map((post) => {
                    return (
                      <div key={post._id} className="col-6 col-md-4 col-lg-3">
                        <PlaceCard
                          image={post.image}
                          title={post.title}
                          rating={post.total_rating}
                        />
                      </div>
                    );
                  })}
              {/* <div className="col-6 col-md-4 col-lg-3">
                <PlaceCard />
              </div>
              <div className="col-6 col-md-4 col-lg-3">
                <PlaceCard />
              </div>
              <div className="col-6 col-md-4 col-lg-3">
                <PlaceCard />
              </div> */}
            </div>
          </div>

          {/* <div className="my-3">
            <p className="fs-3 fw-bold brown noto-serif-display-subtitle my-4">
              Most Popular Places
            </p>
            <div className="row">
              <div className="col-6 col-md-4 col-lg-3">
                <PlaceCard />
              </div>
              <div className="col-6 col-md-4 col-lg-3">
                <PlaceCard />
              </div>
              <div className="col-6 col-md-4 col-lg-3">
                <PlaceCard />
              </div>
              <div className="col-6 col-md-4 col-lg-3">
                <PlaceCard />
              </div>
            </div>
            <hr />
          </div> */}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Search;
