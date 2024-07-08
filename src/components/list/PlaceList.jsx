import React from "react";
import PlaceCard from "../card/PlaceCard";
import Header from "../nav/Header";
import Footer from "../nav/Footer";

const PlaceList = () => {
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

        {/* card area end */}
      </div>
      <Footer />
    </div>
  );
};

export default PlaceList;
