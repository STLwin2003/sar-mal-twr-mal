import React, { useState } from "react";
import { Link } from "react-router-dom";

const StreetFoodCard = ({ pid, image, description, rating }) => {
  let [fav, setFav] = useState(true);

  let favorite = () => {
    setFav(!fav);
    console.log(fav);
  };
  return (
    <div className="mb-4">
      <div>
        <div class="position-relative">
          <Link
            to={`/street_food/food_detail/${pid}`}
            style={{ textDecoration: "none", color: "inherit" }}
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={image}
              className="card-img-top rounded shadow-lg"
              alt="img"
            />
          </Link>

          <Link
            onClick={favorite}
            className={`fa-solid fa-heart fs-3  position-absolute top-0 end-0 mt-2 me-2 ${
              fav ? "text-light" : "text-warning"
            }`}
            style={{ textDecoration: "none" }}
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
            <Link
              to={`/street_food/food_detail/${pid}`}
              style={{ textDecoration: "none", color: "inherit" }}
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <span className=" fs-5 roboto-regular text-decoration-none">
                {description}
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StreetFoodCard;
