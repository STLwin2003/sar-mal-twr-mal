import React from "react";
import StreetFoodCard from "../../card/CoffeeShopCard";

const Event = () => {
  return (
    <div>
      <section>
        <div className="container-fluid">
          <h1>Add Event from Admin</h1>
          <div className="row my-4">
            <div className="col-5">
              <input
                type="text"
                className="form-control border-3"
                placeholder="Enter Event Name"
              />
            </div>
          </div>

          <div className="row ">
            <div className="col-3">
              <StreetFoodCard />
            </div>
            <div className="col-3">
              <StreetFoodCard />
            </div>
            <div className="col-3">
              <StreetFoodCard />
            </div>
            <div className="col-3">
              <StreetFoodCard />
            </div>
          </div>
          <hr />
          {/* post list here */}
          <div>
            <h1>Post List here</h1>
            <div className="row">
              <div className="col-3">
                <StreetFoodCard />
              </div>
              <div className="col-3">
                <StreetFoodCard />
              </div>
              <div className="col-3">
                <StreetFoodCard />
              </div>
              <div className="col-3">
                <StreetFoodCard />
              </div>
              <div className="col-3">
                <StreetFoodCard />
              </div>
              <div className="col-3">
                <StreetFoodCard />
              </div>
              <div className="col-3">
                <StreetFoodCard />
              </div>
              <div className="col-3">
                <StreetFoodCard />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Event;
