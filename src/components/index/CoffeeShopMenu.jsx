import React from "react";
import { Link } from "react-router-dom";
import CoffeeShopCard from "../card/CoffeeShopCard";

const CoffeeShopMenu = () => {
  return (
    <div>
      <div className="container my-5">
        <p class="fs-2 fw-bold brown noto-serif-display-subtitle my-4">
          Coffee Shop Menu
        </p>

        <div className="row">
          <div className="col-sm-6 col-md-4 col-lg-3">
            <CoffeeShopCard />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <CoffeeShopCard />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <CoffeeShopCard />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <CoffeeShopCard />
          </div>

          <div className="d-grid gap-2 d-md-flex justify-content-md-end my-4">
            <Link
              to="/coffee_shop_list"
              className="btn px-4"
              type="button"
              style={{ background: "#b46c14", color: "white" }}
            >
              See More
            </Link>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default CoffeeShopMenu;
