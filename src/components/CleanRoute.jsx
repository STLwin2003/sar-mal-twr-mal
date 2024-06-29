import { Route, Routes } from "react-router";

import React from "react";
import Header from "./Header";
import StreetFoodList from "./list/StreetFoodList";
import PlaceList from "./list/PlaceList";
import CoffeeShopList from "./list/CoffeeShopList";
import Footer from "./Footer";
import Detail from "./Detail";
import UserProfile from "./user/UserProfile.jsx";
import Login from "./user/Login.jsx";
import SignUp from "./user/SignUp.jsx";
import Index from "./Index";
const CleanRoute = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Index />} />
        <Route path="/street_food_list" element={<StreetFoodList />} />
        <Route path="/coffee_shop_list" element={<CoffeeShopList />} />
        <Route path="/place_list" element={<PlaceList />} />
        <Route path="/street_food/detail" element={<Detail />} />
        <Route path="/coffee_shop/detail" element={<Detail />} />
        <Route path="/place/detail" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/user_profile" element={<UserProfile />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default CleanRoute;
