import React, { useEffect, useState } from "react";
import FoodCard from "../card/FoodCard";
import Header from "../nav/Header";
import Footer from "../nav/Footer";
import { usePosts } from "../../context/PostProvider";

const RestaurantList = () => {
  const { posts } = usePosts();
  const [restaurantPosts, setRestaurantPosts] = useState([]);
  useEffect(() => {
    const restaurant = posts.filter((post) => post.category === "restaurant");
    setRestaurantPosts(restaurant);
  }, [posts]);
  return (
    <div>
      <Header />
      <div className="container my-5">
        <p className="fs-2 text-center my-5">
          <span className="brown  noto-serif-display-subtitle">
            Restaurant MENU
          </span>
        </p>

        {/* card area start */}

        <div className="row">
          {restaurantPosts &&
            restaurantPosts.map((post) => {
              return (
                <div key={post._id} className="col-6 col-md-4 col-lg-3">
                  <FoodCard
                    pid={post._id}
                    image={post.image}
                    description={post.product_description}
                    rating={post.total_rating}
                  />
                </div>
              );
            })}
          {/* <div className="col-6 col-md-4 col-lg-3">
            <FoodCard />
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <FoodCard />
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <FoodCard />
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <FoodCard />
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <FoodCard />
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <FoodCard />
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <FoodCard />
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <FoodCard />
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <FoodCard />
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <FoodCard />
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <FoodCard />
          </div> */}
        </div>

        {/* card area end */}
      </div>
      <Footer />
    </div>
  );
};

export default RestaurantList;
