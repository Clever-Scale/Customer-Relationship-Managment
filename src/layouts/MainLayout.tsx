import HeaderBar from "@components/HeaderBar";
import Sidebar from "@components/Sidebar/Sidebar";
import React from "react";
import { Link, Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="w-full h-full">
      <HeaderBar />
      <div className="flex h-[calc(100%-64px)] w-full">
        <Sidebar />
        <div className="w-[90%]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
