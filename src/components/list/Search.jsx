import React, { useRef } from "react";
import Footer from "../nav/Footer";

import PlaceCard from "../card/PlaceCard";
import { Link } from "react-router-dom";

const Search = () => {
  let searchData = useRef();

  let clearSearch = () => {
    console.log(searchData.current.value);
    searchData.current.value = "";
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
              <Link to="/" className=" text-decoration-none text-dark">
                <p className="my-auto">
                  <span className="fs-5 fw-semibold roboto-regular">
                    Cancel
                  </span>
                </p>
              </Link>
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
              Most Popular StreetFood Right Now
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
          </div>

          <div className="my-3">
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
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Search;
