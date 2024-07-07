import React from "react";
import AdminFoodCard from "../card/AdminFoodCard";

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

          <div className="row bg-light-gray rounded">
            <div className="col-4">
              <AdminFoodCard />
            </div>
            <div className="col-4">
              <AdminFoodCard />
            </div>
            <div className="col-4">
              <AdminFoodCard />
            </div>
            <div className="col-4">
              <AdminFoodCard />
            </div>
            <div className="col-4">
              <AdminFoodCard />
            </div>
            <div className="col-4">
              <AdminFoodCard />
            </div>
          </div>
          <hr />
          {/* post list here */}
          <div>
            <h1>Post List here</h1>
            <div className="row">
              <div className="col-4">
                <AdminFoodCard />
                <button className="btn btn-warning mb-2">Add Event</button>
              </div>
              <div className="col-4">
                <AdminFoodCard />
                <button className="btn btn-warning mb-2">Add Event</button>
              </div>
              <div className="col-4">
                <AdminFoodCard />
                <button className="btn btn-warning mb-2">Add Event</button>
              </div>
              <hr />
              <div className="col-4">
                <AdminFoodCard />
                <button className="btn btn-warning mb-2">Add Event</button>
              </div>
              <div className="col-4">
                <AdminFoodCard />
                <button className="btn btn-warning mb-2">Add Event</button>
              </div>
              <div className="col-4">
                <AdminFoodCard />
                <button className="btn btn-warning mb-2">Add Event</button>
              </div>
              <hr />
              <div className="col-4">
                <AdminFoodCard />
                <button className="btn btn-warning mb-2">Add Event</button>
              </div>
              <div className="col-4">
                <AdminFoodCard />
                <button className="btn btn-warning mb-2">Add Event</button>
              </div>
              <div className="col-4">
                <AdminFoodCard />
                <button className="btn btn-warning mb-2">Add Event</button>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Event;
