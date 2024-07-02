import React from "react";
import { Link } from "react-router-dom";

const PlaceCard = () => {
  return (
    <div className="mb-4">
      <Link
        to="/place/place_detail"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div>
          <div className=" position-relative">
            <img
              src="https://jayscotts.com/wp-content/uploads/2022/03/restaurant-patio-design-6-821x1024.jpg"
              className="rounded card-img-top shadow-lg"
              alt=""
            />
            <Link
              className="fa-solid fa-heart fs-1 text-light position-absolute top-0 end-0 mt-2 me-2 "
              style={{ textDecoration: "none", color: "inherit" }}
            ></Link>
          </div>
          <div className="card-body mt-2">
            <div className="">
              <i class="fa-solid fa-star fs-5 text-warning"></i>
              <sppan className="fs-5 fw-semibold  roboto-regular ms-2">
                9.4
              </sppan>
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
