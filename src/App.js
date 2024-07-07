import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { useLocation } from "react-router-dom";
import Error from "./components/Error";
import CleanRoute from "./components/CleanRoute.jsx";
import AdminRoute from "./components/AdminRoute.jsx";
import AuthSection from "./components/AuthSection.jsx";

const App = () => {
  let location = useLocation();
  console.log(location.pathname);

  let adminPath = [
    "/admin_dashboard",
    "/admin/add_post",
    "/admin/event",
    "/admin/user_list",
    "/admin/post_list",
    "/admin/rating_list",
    "/admin/comment_list",
    "/admin/food_detail",
    "/admin/place_detail",
  ];

  let authPath = ["/login", "/signup", "/admin_login", "/admin_signup"];

  let arrPath = [
    "/",
    "/home",
    "/street_food_list",
    "/coffee_shop_list",
    "/place_list",
    "/street_food/food_detail",
    "/coffee_shop/food_detail",
    "/place/place_detail",
    "/user_profile",
  ];
  if (arrPath.includes(location.pathname)) {
    return <CleanRoute />;
  } else if (adminPath.includes(location.pathname)) {
    return <AdminRoute />;
  } else if (authPath.includes(location.pathname)) {
    return <AuthSection />;
  } else {
    return <Error />;
  }
};

export default App;
