/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Slider from "./index/Slider";
import StreetFoodMenu from "./index/StreetFoodMenu";
import PlaceMenu from "./index/PlaceMenu";
import ContactUs from "./index/ContactUs";
import AboutUs from "./index/AboutUs";
import Trending from "./index/Trending";
import Header from "./nav/Header";
import Footer from "./nav/Footer";
import RestaurantMenu from "./index/RestaurantMenu";

const Index = () => {
  return (
    <div>
      <Header />
      <Slider />
      <Trending />
      <StreetFoodMenu />
      <RestaurantMenu />
      <PlaceMenu />
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Index;
