import React from "react";
import { Route, Routes } from "react-router";
import AdminLogin from "./components/admin/AdminLogin";
import AdminSignup from "./components/admin/AdminSignup";
import AddPost from "./components/admin/action/AddPost";
import Dashboard from "./components/admin/Dashboard";

const AdminRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/admin_dashboard" element={<Dashboard />} />
        <Route path="/admin_login" element={<AdminLogin />} />
        <Route path="/admin_signup" element={<AdminSignup />} />
        <Route path="/add_post" element={<AddPost />} />
      </Routes>
    </div>
  );
};

export default AdminRoute;
