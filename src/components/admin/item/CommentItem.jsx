import React from "react";
import AdminFoodCard from "../card/AdminFoodCard";

const CommentItem = ({ e, id }) => {
  return (
    <div>
      <div className="row rounded-4">
        <div className="col-3 d-flex my-auto">
          <span className="my-auto fs-6 fw-bold">{id + 1}</span>
          <div className="p-2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_1bpO0XDD8fbmRvnbnkCoQNFFoH3AqofVTg&s"
              alt=""
              className=" rounded-circle w-25 shadow-lg ms-2"
            />
            <span className="fs-6 ms-3 roboto-regular">{e}</span>
          </div>
        </div>
        <div className="col-5 my-auto">
          <div className="border border-dark-subtle rounded-5 p-3 mb-1">
            <p className="fs-6 roboto-regular fw-semibold rounded-5 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
            </p>
          </div>
        </div>
        <div className=" col-4 my-auto">
          <div className="">
            <AdminFoodCard />
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default CommentItem;
