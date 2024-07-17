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
import { useAdmin } from "../context/AdminProvider";

const Index = () => {
  const { carousel, setCarousel } = useAdmin();
  useEffect(() => {
    (async () => {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/posts/carousel/list`
      );
      const { resource } = await res.json();
      setCarousel(resource);
    })();
  }, [setCarousel]);
  return (
    <div>
      <Header />
      <Slider carousels={carousel} />
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
