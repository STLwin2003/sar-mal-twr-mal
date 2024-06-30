import React from "react";
import { Link } from "react-router-dom";

const CoffeeShopCard = () => {
  return (
    <div>
      <Link
        to="/coffee_shop/food_detail"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className="">
          <img
            src="https://images.pexels.com/photos/414630/pexels-photo-414630.jpeg?auto=compress&cs=tinysrgb&w=600"
            class="card-img-top shadow-lg rounded"
            alt="img"
          />
          <div className="card-body">
            <p className="card-title mt-2 ">
              <span className="fw-medium fs-5 roboto-regular">Coffee</span>
            </p>{" "}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CoffeeShopCard;
