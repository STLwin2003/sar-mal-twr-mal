import React from "react";
import FoodCard from "../card/FoodCard";
import Header from "../nav/Header";
import Footer from "../nav/Footer";

const CoffeeShopList = () => {
  return (
    <div>
      <Header />
      <div className="container my-5">
        <p className="fs-2 text-center my-5">
          <span className="brown  noto-serif-display-subtitle">
            COFFEE SHOP MENU
          </span>
        </p>

        {/* card area start */}

        <div className="row">
          <div className="col-sm-6 col-md-4 col-lg-3">
            <FoodCard />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <FoodCard />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <FoodCard />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <FoodCard />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <FoodCard />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <FoodCard />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <FoodCard />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <FoodCard />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <FoodCard />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <FoodCard />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <FoodCard />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <FoodCard />
          </div>
        </div>

        {/* card area end */}
      </div>
      <Footer />
    </div>
  );
};

export default CoffeeShopList;
