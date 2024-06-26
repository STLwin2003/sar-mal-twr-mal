/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import StreetFoodCard from "../card/StreetFoodCard";

const StreetFoodList = () => {
  return (
    <div>
      <div className="container my-5">
        <p class="fs-2 text-center my-4">
          <span className="brown hind-siliguri-semibold">STREET FOOD MENU</span>
        </p>

        {/* card area start */}

        <div className="row">
          <div className="col-sm-6 col-md-4 col-lg-3">
            <StreetFoodCard />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <StreetFoodCard />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <StreetFoodCard />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <StreetFoodCard />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <StreetFoodCard />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <StreetFoodCard />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <StreetFoodCard />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <StreetFoodCard />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <StreetFoodCard />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <StreetFoodCard />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <StreetFoodCard />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <StreetFoodCard />
          </div>
        </div>

        {/* card area end */}

        {/* pagination start */}

        <div className="">
          <nav aria-label="Page navigation ">
            <ul className="pagination  justify-content-center ">
              <li className="page-item ">
                <a className="page-link  px-4 py-3" href="#">
                  <span className="brown fs-5">1</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link  px-4 py-3" href="#">
                  <span className="brown fs-5">2</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link  px-4 py-3" href="#">
                  <span className="brown fs-5">3</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link  px-2 py-3" href="#">
                  <span className="brown fs-5">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {/* pagination end */}
      </div>
    </div>
  );
};

export default StreetFoodList;
