import React from "react";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const DefaultLayout: React.FC = () => {
  return (
    <div>
      <Navbar />

      <Sidebar />

      <Outlet />
    </div>
  );
};

export default DefaultLayout;
