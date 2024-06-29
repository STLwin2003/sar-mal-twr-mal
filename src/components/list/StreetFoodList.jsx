import React from "react";
import StreetFoodCard from "../card/StreetFoodCard";

const StreetFoodList = () => {
  return (
    <div>
      <div className="container my-5">
        <p className="fs-2 text-center my-4">
          <span className="brown hind-siliguri-semibold">STREET FOOD MENU</span>
        </p>

        {/* card area start */}

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

        {/* card area end */}
      </div>
    </div>
  );
};

export default StreetFoodList;
