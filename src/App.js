import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

import { useLocation } from "react-router-dom";

import Error from "./components/Error";

import CleanRoute from "./components/CleanRoute.jsx";

const App = () => {
  let location = useLocation();

  let arrPath = [
    "/",
    "/home",
    "/street_food_list",
    "/coffee_shop_list",
    "/place_list",
    "/street_food/detail",
    "/coffee_shop/detail",
    "/place/detail",
    "/login",
    "/signup",
    "/user_profile",
  ];
  if (arrPath.includes(location.pathname)) {
    return <CleanRoute />;
  } else {
    return <Error />;
  }
};

export default App;
