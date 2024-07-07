import { Route, Routes } from "react-router";
import React from "react";
import StreetFoodList from "./list/StreetFoodList";
import PlaceList from "./list/PlaceList";
import CoffeeShopList from "./list/CoffeeShopList";
import FoodDetail from "./detail/FoodDetail.jsx";
import PlaceDetail from "./detail/PlaceDetail.jsx";
import UserProfile from "./user/UserProfile.jsx";
import Index from "./Index";
import Error from "./Error.jsx";
const CleanRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Index />} />
        <Route path="/street_food_list" element={<StreetFoodList />} />
        <Route path="/coffee_shop_list" element={<CoffeeShopList />} />
        <Route path="/place_list" element={<PlaceList />} />
        <Route path="/street_food/food_detail/:pid" element={<FoodDetail />} />
        <Route path="/coffee_shop/food_detail" element={<FoodDetail />} />
        <Route path="/place/place_detail" element={<PlaceDetail />} />
        <Route path="/user_profile" element={<UserProfile />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default CleanRoute;
