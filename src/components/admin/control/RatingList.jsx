import React from "react";
import AdminFoodCard from "../card/AdminFoodCard";

const RatingList = () => {
  return (
    <div>
      <section>
        <h1>Rating List for Admin</h1>
        <div className="row border rounded-4">
          <div className="col-3 my-auto d-flex">
            <div className="p-4 text-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_1bpO0XDD8fbmRvnbnkCoQNFFoH3AqofVTg&s"
                alt=""
                className=" rounded-circle w-50"
              />
            </div>
            <div>
              {" "}
              <p className="fs-3 ">Name here</p>
              <p>sample@gmail.com</p>
            </div>
          </div>
          <div className="col-4 my-auto">
            <div className="border border-dark-subtle rounded-5 p-3">
              <i class="fa-solid fa-star fs-4 me-2"></i>
              <i class="fa-solid fa-star fs-4 me-2"></i>
              <i class="fa-solid fa-star fs-4 me-2"></i>
              <i class="fa-solid fa-star fs-4 me-2"></i>
              <i class="fa-solid fa-star fs-4 me-2"></i>
              <i class="fa-solid fa-star fs-4 me-2"></i>
              <i class="fa-solid fa-star fs-4 me-2"></i>
              <i class="fa-solid fa-star fs-4 me-2"></i>
              <i class="fa-solid fa-star fs-4 me-2"></i>
              <i class="fa-solid fa-star fs-4 me-2"></i>
            </div>
          </div>
          <div className=" col-4 my-auto">
            <div className=" w-50 ">
              <AdminFoodCard />
            </div>
          </div>
        </div>
        
      </section>
    </div>
  );
};

export default RatingList;
