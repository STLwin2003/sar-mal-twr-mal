import React from "react";
import { Link } from "react-router-dom";

const CoffeeShopCard = () => {
  return (
    <div className="mb-4">
      <Link
        to="/coffee_shop/food_detail"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className=" position-relative">
          <img
            src="https://images.pexels.com/photos/414630/pexels-photo-414630.jpeg?auto=compress&cs=tinysrgb&w=600"
            class="card-img-top shadow-lg rounded"
            alt="img"
          />
          <Link
            className="fa-solid fa-heart fs-1 text-light position-absolute top-0 end-0 mt-2 me-2 "
            style={{ textDecoration: "none", color: "inherit" }}
          ></Link>
        </div>
        <div className="card-body">
          <p className="card-title mt-2 ">
            <div className="">
              <i class="fa-solid fa-star fs-5 text-warning"></i>
              <sppan className="fs-5 fw-semibold  roboto-regular ms-2">
                9.4
              </sppan>
            </div>
            <span className="fw-medium fs-5 roboto-regular">Coffee</span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default CoffeeShopCard;
