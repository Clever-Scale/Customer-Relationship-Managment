import React from "react";
import { Outlet } from "react-router-dom";

function EmployeeLayout() {
  return (
    <div className="py-10 px-40 w-full">
      <Outlet />
    </div>
  );
}

export default EmployeeLayout;
