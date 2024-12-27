import { createRoot } from "react-dom/client";
import Llamato from "./App.jsx";
import "./index.css";
import Home from "./components/home.jsx";
import React from "react";
import NavBar from "./components/NavBar.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import Quiz from "./components/Quiz.jsx";
import About from "./components/About.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import Rag from "./components/quizComponents/Rag.jsx";
import VoiceRag from "./components/quizComponents/VoiceRag.jsx";
import FineTune from "./components/quizComponents/FineTune.jsx";
import { AuthProvider } from "./components/AuthorContext.jsx";
import Git from "./components/Git.jsx";

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
        element: <Quiz />,
      },
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "Login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "FineTune",
        element: <FineTune />,
      },
      {
        path: "Rag",
        element: <Rag />,
      },
      {
        path: "VoiceRag",
        element: <VoiceRag />,
      },
      {
        path: "git",
        element: <Git />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </>
);
