import React from "react";
import { Link } from "react-router-dom";

const StreetFoodCard = () => {
  return (
    <div>
      <Link
        to="/street_food/food_detail"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div class="position-relative">
          <img
            src="https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="card-img-top rounded shadow-lg"
            alt="img"
          />
          <Link
            className="fa-solid fa-heart fs-3 text-light position-absolute top-0 end-0 mt-2 me-2 "
            style={{ textDecoration: "none", color: "inherit" }}
          ></Link>
        </div>

        <div className="card-body">
          <p className="card-title mt-2 brown">
            <span className=" fs-5 roboto-regular text-decoration-none">
              Street food
            </span>
            <div className=" float-end">
              <i class="fa-solid fa-star fs-5 text-warning ms-3"></i>
              <sppan className="fs-5 fw-semibold  roboto-regular ms-2">
                9.4
              </sppan>
            </div>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default StreetFoodCard;
