import React, { useState } from "react";
import { Link } from "react-router-dom";

const PlaceCard = ({ image, rating, title }) => {
  let [fav, setFav] = useState(true);

  let favorite = () => {
    setFav(!fav);
    console.log(fav);
  };

  return (
    <div className="mb-4">
      <div className=" position-relative">
        <Link
          to="/place/place_detail"
          style={{ textDecoration: "none", color: "inherit" }}
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img src={image} className="rounded card-img-top shadow-lg" alt="" />
        </Link>

        <Link
          onClick={favorite}
          className={`fa-solid fa-heart fs-3  position-absolute top-0 end-0 mt-2 me-2 ${
            fav ? "text-light" : "text-warning"
          }`}
          style={{ textDecoration: "none" }}
        ></Link>
      </div>
      <div className="card-body mt-2">
        <div className="">
          <i className="fa-solid fa-star fs-5 text-warning"></i>
          <span className="fs-5 fw-semibold  roboto-regular ms-2">
            {rating}
          </span>
        </div>
        <Link
          to="/place/place_detail"
          style={{ textDecoration: "none", color: "inherit" }}
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <span className="fs-5 mt-2 fw-medium roboto-regular">{title}</span>
        </Link>
      </div>
    </div>
  );
};

export default PlaceCard;
