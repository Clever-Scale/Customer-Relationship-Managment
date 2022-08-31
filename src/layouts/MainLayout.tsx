import HeaderBar from "@components/HeaderBar";
import Sidebar from "@components/Sidebar/Sidebar";
import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";

function MainLayout() {
  const token = localStorage.getItem("token");

  console.log(token);

  if (!token) {
    return <Navigate to={"/user-login"}></Navigate>;
  }
  return (
    <div className="w-full h-full">
      <HeaderBar />
      <div className="flex h-[calc(100%-64px)] w-full">
        <Sidebar />
        <div className="w-full md:w-[90%]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
