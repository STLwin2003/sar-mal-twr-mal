import React from "react";
import Header from "../nav/Header";
import Footer from "../nav/Footer";

import FoodCard from "../card/FoodCard";
import PlaceCard from "../card/PlaceCard";

const Search = () => {
  return (
    <div>
      <Header />

      <div className="">
        <div className="container">
          <div className="row mb-4">
            <div className="col-lg-8 col-sm-12">
              <input
                type="text"
                placeholder="Search a food or place"
                className="form-control border-2"
              />
            </div>
          </div>

          {/* search data area start */}

          {/* <div className="row my-3">
            <p className="fs-3 fw-semibold noto-serif-display-subtitle mb-4">
              Search result for <span className="text-warning">(keyword)</span>
            </p>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <PlaceCard />
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <PlaceCard />
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <PlaceCard />
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <PlaceCard />
            </div>
          </div> */}

          {/* search data area end */}

          <div className="my-3">
            <p className="fs-3 fw-bold brown noto-serif-display-subtitle my-4">
              Most Popular StreetFood Right Now
            </p>
            <div className="row">
              <div className="col-sm-6 col-md-4 col-lg-3">
                <PlaceCard />
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <PlaceCard />
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <PlaceCard />
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
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
              <div className="col-sm-6 col-md-4 col-lg-3">
                <PlaceCard />
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <PlaceCard />
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
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
