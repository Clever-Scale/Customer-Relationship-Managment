import HomeContent from "@components/HomeContent/HomeContent";
import MainLayout from "@layouts/MainLayout";
import { useState } from "react";
import { useRoutes } from "react-router-dom";
import "./App.css";
import { CreateUser, UserLayout, UserPage } from "./pages/users";

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
              element: <UserPage />,
            },
            {
              path: "create-user",
              element: <CreateUser />,
            },
          ],
        },
      ],
    },
  ]);

  return element;
}

export default App;
