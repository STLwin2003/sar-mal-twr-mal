import React, { useState } from "react";
import { Link } from "react-router-dom";

const PlaceCard = () => {
  let [fav, setFav] = useState(true);

  let favorite = () => {
    setFav(!fav);
    console.log(fav);
  };

  return (
    <div className="mb-4">
      <Link
        to="/place/place_detail"
        style={{ textDecoration: "none", color: "inherit" }}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <div>
          <div className=" position-relative">
            <img
              src="https://jayscotts.com/wp-content/uploads/2022/03/restaurant-patio-design-6-821x1024.jpg"
              className="rounded card-img-top shadow-lg"
              alt=""
            />
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
              <i class="fa-solid fa-star fs-5 text-warning"></i>
              <span className="fs-5 fw-semibold  roboto-regular ms-2">9.4</span>
            </div>
            <span className="fs-5 mt-2 fw-medium roboto-regular">
              Pathein Park
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PlaceCard;
