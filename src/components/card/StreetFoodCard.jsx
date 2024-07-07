import React from "react";
import { Link } from "react-router-dom";

const StreetFoodCard = ({ pid, image, description, rating }) => {
  return (
    <div className="mb-4">
      <Link
        to={`/street_food/food_detail/${pid}`}
        style={{ textDecoration: "none", color: "inherit" }}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        {/* "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" */}
        <div class="position-relative">
          <img
            src={image}
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
            <div className="">
              <i class="fa-solid fa-star fs-5 text-warning "></i>
              <span className="fs-5 fw-semibold  roboto-regular ms-2">
                {rating}
              </span>
            </div>
            <span className=" fs-5 roboto-regular text-decoration-none">
              {description}
            </span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default StreetFoodCard;
