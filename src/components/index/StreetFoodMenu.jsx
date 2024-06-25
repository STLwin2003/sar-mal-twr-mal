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
        <div className="d-grid gap-2 d-md-flex justify-content-md-end " >
           <button className="btn" type="button" style={{background:"#b46c14",color:"white"}}>See More</button>
        </div>
      </div>
    </div>
  );
};

export default StreetFoodMenu;
