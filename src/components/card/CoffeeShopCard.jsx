import React, { useState } from "react";
import { Link } from "react-router-dom";

const CoffeeShopCard = () => {
  let [fav, setFav] = useState(true);

  let favorite = () => {
    setFav(!fav);
    console.log(fav);
  };
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
            onClick={favorite}
            className={`fa-solid fa-heart fs-3  position-absolute top-0 end-0 mt-2 me-2 ${
              fav ? "text-light" : "text-warning"
            }`}
            style={{ textDecoration: "none" }}
          ></Link>
        </div>
        <div className="card-body">
          <p className="card-title mt-2 ">
            <div className="">
              <i class="fa-solid fa-star fs-5 text-warning"></i>
              <span className="fs-5 fw-semibold  roboto-regular m-2">9.4</span>
            </div>
            <span className="fw-medium fs-5 roboto-regular ">Coffee</span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default CoffeeShopCard;
