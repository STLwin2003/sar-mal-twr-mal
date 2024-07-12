import React from "react";
import FoodCard from "../card/FoodCard";
import { Link } from "react-router-dom";
import { usePosts } from "../../context/postProvider";

const StreetFoodMenu = () => {
  const { posts } = usePosts();
  return (
    <div>
      <div className="container my-5">
        <p class="fs-2 fw-bold brown noto-serif-display-subtitle my-4">
          Street Food Menu
        </p>
        <div className="row">
          {posts.map((post) => {
            return (
              <div key={post._id} className="col-6 col-md-4 col-lg-3">
                <FoodCard
                  pid={post._id}
                  image={post.image[0]}
                  description={post.title}
                  rating={post.total_rating}
                />
              </div>
            );
          })}
        </div>

        <div className="d-grid  d-md-flex justify-content-md-end my-4">
          <Link
            to="/street_food_list"
            className="btn brown px-4"
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

export default StreetFoodMenu;
