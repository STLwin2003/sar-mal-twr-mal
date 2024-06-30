import React from "react";
import { Link } from "react-router-dom";

const StreetFoodCard = () => {
  return (
    <div>
      <Link
        to="/street_food/food_detail"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div class="">
          <img
            src="https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            class="card-img-top rounded shadow-lg"
            alt="img"
          />
          <div class="card-body">
            <p class="card-title mt-2 brown">
              <span className=" fs-5 roboto-regular text-decoration-none">
                Street food
              </span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default StreetFoodCard;
