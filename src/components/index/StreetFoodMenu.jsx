import React from "react";
import StreetFoodCard from "../card/StreetFoodCard";

const StreetFoodMenu = () => {
  return (
    <div>
      <div className="container my-5">
        <p class="fs-4">
          <span className="brown">STREET FOOD MENU</span>
        </p>

        <div className="row">
          <div className="col-sm-6 col-md-4 col-lg-3">
            <StreetFoodCard />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <StreetFoodCard />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <StreetFoodCard />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <StreetFoodCard />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <StreetFoodCard />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <StreetFoodCard />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <StreetFoodCard />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <StreetFoodCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreetFoodMenu;
