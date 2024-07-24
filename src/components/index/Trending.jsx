import React from "react";
import FoodCard from "../card/FoodCard";
import PlaceCard from "../card/PlaceCard";
const Trending = ({ posts }) => {
  return (
    <div>
      <div className="container">
        <div className="row my-5"></div>
        <p className="fs-2 fw-bold brown noto-serif-display-subtitle mt-4">
          Trending Right Now
        </p>
        <p className="fs-5 fw-medium mb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
          tempore debitis minus illum corrupti
        </p>
        <div className="row">
          {posts &&
            posts.map((post) => {
              return (
                <div key={post._id} className="col-6 col-md-4 col-lg-4 mb-4">
                  <FoodCard
                    pid={post._id}
                    image={post.image}
                    title={post.title}
                    rating={post.total_rating}
                  />
                </div>
              );
            })}
          {/* <div className="col-6 col-md-4 col-lg-4">
            <FoodCard />
          </div>
          <div className="col-6 col-md-4 col-lg-4">
            <FoodCard />
          </div>
          <div className="col-6 col-md-4 col-lg-4">
            <PlaceCard />
          </div>
          <div className="col-6 col-md-4 col-lg-4">
            <PlaceCard />
          </div>
          <div className="col-6 col-md-4 col-lg-4">
            <PlaceCard />
          </div> */}
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Trending;
