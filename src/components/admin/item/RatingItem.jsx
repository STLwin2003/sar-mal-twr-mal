import React from "react";
import AdminFoodCard from "../card/AdminFoodCard";

const RatingItem = ({ e, id }) => {
  return (
    <div>
      <div className="row  rounded-4">
        <div className="col-3 my-auto d-flex">
          <span className="my-auto fs-6 fw-bold">{id + 1}</span>
          <div className="p-2 text-start">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_1bpO0XDD8fbmRvnbnkCoQNFFoH3AqofVTg&s"
              alt=""
              className=" rounded-circle w-25 shadow-lg ms-2"
            />
            <span className="fs-6 ms-3 roboto-regular">{e}</span>
          </div>
        </div>
        <div className="col-4 my-auto">
          <div className="border border-dark-subtle rounded-5 p-1">
            <i class="fa-solid fa-star fs-6 mx-2"></i>
            <i class="fa-solid fa-star fs-6 me-2"></i>
            <i class="fa-solid fa-star fs-6 me-2"></i>
            <i class="fa-solid fa-star fs-6 me-2"></i>
            <i class="fa-solid fa-star fs-6 me-2"></i>
            <i class="fa-solid fa-star fs-6 me-2"></i>
            <i class="fa-solid fa-star fs-6 me-2"></i>
            <i class="fa-solid fa-star fs-6 me-2"></i>
            <i class="fa-solid fa-star fs-6 me-2"></i>
            <i class="fa-solid fa-star fs-6 me-2"></i>
          </div>
        </div>
        <div className=" col-4 my-auto">
          <div className="w-100">
            <AdminFoodCard />
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default RatingItem;
