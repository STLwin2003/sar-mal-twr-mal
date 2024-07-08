import React from "react";
import CoffeeShopCard from "../card/CoffeeShopCard";
import PlaceCard from "../card/PlaceCard";
import StreetFoodCard from "../card/StreetFoodCard";

const Trending = () => {
  return (
    <div>
      <div className="container">
        <div className="row my-5"></div>
        <p className="fs-2 fw-bold brown noto-serif-display-subtitle my-4">
          Trending Right Now
        </p>
        <div className="row">
          <div className="col-sm-6 col-md-4 col-lg-4 mb-4">
            <CoffeeShopCard />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4">
            <StreetFoodCard />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4">
            <StreetFoodCard />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4">
            <PlaceCard />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4">
            <PlaceCard />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4">
            <PlaceCard />
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Trending;
