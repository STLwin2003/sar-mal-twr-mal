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
import Loading from "./Loading";

const Index = () => {
  const { carousel, setCarousel } = useAdmin();
  const { pageLoading, setPosts, setPageLoading } = usePosts();
  const [restaurantPosts, setRestaurantPosts] = useState([]);
  const [streetFoodPosts, setStreetFoodPosts] = useState([]);
  const [placePosts, setPlacePosts] = useState([]);
  const [trending, setTrending] = useState([]);
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
    (async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/posts`);
      if (res.ok) setPageLoading(true);
      const { resource } = await res.json();
      const restaurantPosts = resource
        .filter((post) => post.category === "restaurant")
        .slice(0, 4);
      setRestaurantPosts(restaurantPosts);
      const street = resource
        .filter((post) => post.category === "street_food")
        .slice(0, 4);
      setStreetFoodPosts(street);
      const place = resource
        .filter((post) => post.category === "place")
        .slice(0, 4);
      setPlacePosts(place);

      const sortPosts = resource
        .sort((a, b) => b.total_rating - a.total_rating)
        .slice(0, 3);
      setTrending(sortPosts);
      setPosts(resource);
    })();
  }, []);
  return (
    <div>
      {pageLoading ? (
        <>
          <Header />
          <Slider carousels={carousel} />
          <Trending posts={trending} />
          <StreetFoodMenu posts={streetFoodPosts} />
          <RestaurantMenu posts={restaurantPosts} />
          <PlaceMenu posts={placePosts} />
          <AboutUs />
          <ContactUs />
          <Footer />
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Index;
