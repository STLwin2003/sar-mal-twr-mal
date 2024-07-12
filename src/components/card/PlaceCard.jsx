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
      <div className=" position-relative">
        <Link
          to="/place/place_detail"
          style={{ textDecoration: "none", color: "inherit" }}
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1430163393927-3dab9af7ea38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"
            className="rounded card-img-top shadow-lg"
            alt=""
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
      <div className="card-body mt-2">
        <div className="">
          <i className="fa-solid fa-star fs-5 text-warning"></i>
          <span className="fs-5 fw-semibold  roboto-regular ms-2">9.4</span>
        </div>
        <Link
          to="/place/place_detail"
          style={{ textDecoration: "none", color: "inherit" }}
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <span className="fs-5 mt-2 fw-medium roboto-regular">
            Pathein Park
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PlaceCard;
