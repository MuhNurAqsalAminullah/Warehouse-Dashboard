import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

const Layout = () => {
  return (
    <div className="lg:flex">
      <Sidebar />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
