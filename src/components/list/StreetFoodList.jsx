import React, { useEffect, useState } from "react";
import FoodCard from "../card/FoodCard";
import Header from "../nav/Header";
import Footer from "../nav/Footer";
import { usePosts } from "../../context/PostProvider";

const StreetFoodList = () => {
  const { posts } = usePosts();
  const [streetFood, setStreetFood] = useState([]);
  useEffect(() => {
    const street = posts.filter((post) => post.category === "street_food");
    setStreetFood(street);
  }, [posts]);
  return (
    <div>
      <Header />
      <div className="container my-5">
        <p className="fs-2 text-center my-5">
          <span className="brown  noto-serif-display-subtitle">
            STREET FOOD MENU
          </span>
        </p>

        {/* card area start */}

        <div className="row">
          {streetFood &&
            streetFood.map((food) => {
              return (
                <div key={food._id} className="col-6 col-md-4 col-lg-3">
                  <FoodCard
                    pid={food._id}
                    image={food.image}
                    description={food.product_description}
                    rating={food.total_rating}
                  />
                </div>
              );
            })}
        </div>

        {/* card area end */}
      </div>
      <Footer />
    </div>
  );
};

export default StreetFoodList;
