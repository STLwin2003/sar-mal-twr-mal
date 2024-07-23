import React from "react";
import PlaceCard from "../card/PlaceCard";
import { Link } from "react-router-dom";

const PlaceMenu = ({ posts }) => {
  return (
    <div>
      <div className="container mt-5">
        <p className="brown fs-2 fw-bold noto-serif-display-subtitle my-4">
          Place Menu
        </p>
        <div className="row">
          {posts &&
            posts.map((post) => {
              return (
                <div key={post._id} className="col-6 col-md-4 col-lg-3">
                  <PlaceCard
                    image={post.image}
                    title={post.title}
                    rating={post.total_rating}
                  />
                </div>
              );
            })}
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end my-4">
          <Link
            to="/place_list"
            className="btn px-4"
            type="button"
            style={{ background: "#b46c14", color: "white" }}
          >
            See More
          </Link>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default PlaceMenu;
