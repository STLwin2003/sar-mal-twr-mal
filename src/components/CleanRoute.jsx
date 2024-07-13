import { Route, Routes } from "react-router";
import React from "react";
import Login from "./user/Login.jsx";
import SignUp from "./user/SignUp.jsx";
import StreetFoodList from "./list/StreetFoodList";
import PlaceList from "./list/PlaceList";
import FoodDetail from "./detail/FoodDetail.jsx";
import PlaceDetail from "./detail/PlaceDetail.jsx";
import UserProfile from "./user/UserProfile.jsx";
import Index from "./Index";
import Error from "./Error.jsx";
import AddPost from "./admin/action/AddPost";
import Event from "./admin/action/Event";
import Dashboard from "./admin/Dashboard";
import UserList from "./admin/control/UserList";
import PostList from "./admin/control/PostList";
import RatingList from "./admin/control/RatingList";
import CommentList from "./admin/control/CommentList";
import AdminFoodDetail from "./admin/Detail/FoodDetail.jsx";
import AdminPlaceDetail from "./admin/Detail/PlaceDetail";
import AddSlider from "./admin/action/AddSlider.jsx";
import SliderList from "./admin/control/SliderList.jsx";
import RestaurantList from "./list/RestaurantList.jsx";
import Search from "./list/Search.jsx";
import AdminRegister from "./admin/AdminRegister.jsx";

const CleanRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Index />} />
        <Route path="/search" element={<Search />} />
        <Route path="/home" element={<Index />} />
        <Route path="/street_food_list" element={<StreetFoodList />} />
        <Route path="/restaurant_list" element={<RestaurantList />} />
        <Route path="/place_list" element={<PlaceList />} />
        <Route path="/street_food/food_detail/:pid" element={<FoodDetail />} />
        <Route path="/coffee_shop/food_detail" element={<FoodDetail />} />
        <Route path="/place/place_detail" element={<PlaceDetail />} />
        <Route path="/user_profile" element={<UserProfile />} />
        <Route path="/admin_register" element={<AdminRegister />} />
        <Route path="/admin_dashboard" element={<Dashboard />} />
        <Route path="/admin/add_post" element={<AddPost />} />
        <Route path="/admin/add_slider" element={<AddSlider />} />
        <Route path="/admin/event" element={<Event />} />
        <Route path="/admin/user_list" element={<UserList />} />
        <Route path="/admin/post_list" element={<PostList />} />
        <Route path="/admin/rating_list" element={<RatingList />} />
        <Route path="/admin/comment_list" element={<CommentList />} />
        <Route path="/admin/slider_list" element={<SliderList />} />
        <Route path="/admin/food_detail" element={<AdminFoodDetail />} />
        <Route path="/admin/place_detail" element={<AdminPlaceDetail />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default CleanRoute;
