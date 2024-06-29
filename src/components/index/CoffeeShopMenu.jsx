import React from "react";
import { Link } from "react-router-dom";
import CoffeeShopCard from "../card/CoffeeShopCard";

const CoffeeShopMenu = () => {
  return (
    <div>
      <div className="container my-5">
        <p class="fs-3 fw-semibold">
          <span className="brown">COFFEE SHOP MENU</span>
        </p>

        <div className="row my-3">
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

          <div className="d-grid gap-2 d-md-flex justify-content-md-end ">
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
      </div>
    </div>
  );
};

export default CoffeeShopMenu;
