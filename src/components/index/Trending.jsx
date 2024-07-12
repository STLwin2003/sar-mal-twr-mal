import React from "react";
import FoodCard from "../card/FoodCard";
import PlaceCard from "../card/PlaceCard";
const Trending = () => {
  return (
    <div>
      <div className="container">
        <div className="row my-5"></div>
        <p className="fs-2 fw-bold brown noto-serif-display-subtitle my-4">
          Trending Right Now
        </p>
        <div className="row">
          <div className="col-6 col-md-4 col-lg-4 mb-4">
            <FoodCard />
          </div>
          <div className="col-6 col-md-4 col-lg-4">
            <FoodCard />
          </div>
          <div className="col-6 col-md-4 col-lg-4">
            <FoodCard />
          </div>
          <div className="col-6 col-md-4 col-lg-4">
            <PlaceCard />
          </div>
          <div className="col-6 col-md-4 col-lg-4">
            <PlaceCard />
          </div>
          <div className="col-6 col-md-4 col-lg-4">
            <PlaceCard />
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Trending;
