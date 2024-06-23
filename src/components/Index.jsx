import React from "react";
import Slider from "./index/Slider";
import StreetFoodMenu from "./index/StreetFoodMenu";
import CoffeeShopMenu from "./index/CoffeeShopMenu";
import PlaceMenu from "./index/PlaceMenu";
import ContactUs from "./index/ContactUs";
import AboutUs from "./index/AboutUs";

const Index = () => {
  return (
    <div>
      <Slider />
      <StreetFoodMenu />
      <CoffeeShopMenu />
      <PlaceMenu />
      <AboutUs />
      <ContactUs />
    </div>
  );
};

export default Index;
