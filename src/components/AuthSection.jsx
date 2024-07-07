import React from "react";

import Login from "./user/Login.jsx";
import SignUp from "./user/SignUp.jsx";
import { Route, Routes } from "react-router";

import AdminLogin from "./admin/AdminLogin";
import AdminSignup from "./admin/AdminSignup";

const AuthSection = () => {
  return (
    <div>
      <Routes>
        <Route path="/admin_login" element={<AdminLogin />} />
        <Route path="/admin_signup" element={<AdminSignup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default AuthSection;
