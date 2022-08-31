import HomeContent from "@components/HomeContent/HomeContent";
import DepartmentLayout from "@layouts/DepartmentLayout";
import EmployeeLayout from "@layouts/EmployeeLayout";
import MainLayout from "@layouts/MainLayout";
import UserLayout from "@layouts/UserLayout";
import { useState } from "react";
import { useRoutes } from "react-router-dom";
import "./App.css";
import UserLogin from "./pages/auth/user/UserLogin";
import UserRegister from "./pages/auth/user/UserRegister";
import {
  CreateDepartmentPage,
  DepartmentListPage,
  EditDepartmentPage,
} from "./pages/department";
import { EditEmployeePage, EmployeePage } from "./pages/employees";
import { EditUserPage, UserListPage } from "./pages/users";

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <MainLayout />,

      children: [
        {
          index: true,
          element: <HomeContent />,
        },
        {
          path: "users",
          element: <UserLayout />,
          children: [
            {
              index: true,
              element: <UserListPage />,
            },
            {
              path: "edit-user/:id",
              element: <EditUserPage />,
            },
          ],
        },
        {
          path: "employees",
          element: <EmployeeLayout />,
          children: [
            {
              index: true,
              element: <EmployeePage />,
            },
            {
              path: "edit-employee",
              element: <EditEmployeePage />,
            },
          ],
        },
        {
          path: "departments",
          element: <DepartmentLayout />,
          children: [
            {
              index: true,
              element: <DepartmentListPage />,
            },
            {
              path: "create-department",
              element: <CreateDepartmentPage />,
            },
            {
              path: "edit-department/:id",
              element: <EditDepartmentPage />,
            },
          ],
        },
      ],
    },
    {
      path: "/user-login",
      element: <UserLogin />,
    },
    {
      path: "/user-register",
      element: <UserRegister />,
    },
  ]);

  return element;
}

export default App;
