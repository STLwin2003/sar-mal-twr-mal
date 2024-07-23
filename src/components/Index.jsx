/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
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
import { usePosts } from "../context/PostProvider";

const Index = () => {
  const { carousel, setCarousel } = useAdmin();
  const { posts } = usePosts();
  const [restaurantPosts, setRestaurantPosts] = useState([]);
  const [streetFoodPosts, setStreetFoodPosts] = useState([]);
  const [placePosts, setPlacePosts] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/posts/carousel/list`
      );
      const { resource } = await res.json();
      setCarousel(resource);
    })();
  }, [setCarousel]);
  useEffect(() => {
    const restaurantPosts = posts.filter(
      (post) => post.category === "restaurant"
    );
    setRestaurantPosts(restaurantPosts);
    const street = posts.filter((post) => post.category === "street_food");
    setStreetFoodPosts(street);
    const place = posts.filter((post) => post.category === "place");
    setPlacePosts(place);
  }, [posts]);
  return (
    <div>
      <Header />
      <Slider carousels={carousel} />
      <Trending />
      <StreetFoodMenu posts={streetFoodPosts} />
      <RestaurantMenu posts={restaurantPosts} />
      <PlaceMenu posts={placePosts} />
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Index;
