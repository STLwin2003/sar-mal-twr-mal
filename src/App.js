import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Index from "./components/Index";
import { Route, Routes, useLocation } from "react-router";
import StreetFoodList from "./components/list/StreetFoodList";
import PlaceList from "./components/list/PlaceList";
import CoffeeShopList from "./components/list/CoffeeShopList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Detail from "./components/Detail";
import UserProfile from "./components/user/UserProfile.jsx";
import Login from "./components/user/Login.jsx";
import SignUp from "./components/user/SignUp.jsx";

const App = () => {
  let location = useLocation();
  console.log(location.pathname);
  console.log();

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
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
