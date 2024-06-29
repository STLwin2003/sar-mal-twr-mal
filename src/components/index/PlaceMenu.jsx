import React from "react";
import PlaceCard from "../card/PlaceCard";
import { Link } from "react-router-dom";

const PlaceMenu = () => {
  return (
    <div>
      <div className="container mt-5">
        <p className="brown fs-3 fw-semibold gfs-didot-regular">Place Menu</p>
        <div className="row">
          <div className="col-sm-6 col-md-4 col-lg-3">
            <PlaceCard />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <PlaceCard />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <PlaceCard />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <PlaceCard />
          </div>
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end ">
          <Link
            to="/place_list"
            className="btn px-4"
            type="button"
            style={{ background: "#b46c14", color: "white" }}
          >
            See More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlaceMenu;
