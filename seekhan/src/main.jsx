import { createRoot } from "react-dom/client";
import Llamato from "./App.jsx";
import "./index.css";
import Home from "./components/home.jsx";
import React from "react";
import NavBar from "./components/NavBar.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import Quiz from "./components/Quiz.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import ErrorBoundary from "./components/Errorboundary.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "quiz",
        element: (
          <ErrorBoundary>
            <Quiz />
          </ErrorBoundary>
        ),
      },
      {
        path: "",
        element: <Home />,
      },
      {
        path: "Login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
