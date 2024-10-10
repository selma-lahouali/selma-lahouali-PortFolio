import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import AboutMe from "./Pages/AboutMe/AboutMe";
import Projects from "./Pages/Projects/Projects";
import ContactMe from "./Pages/ContactMe/ContactMe";
import Creacy from "./Pages/Projects/CREACY/Creacy";
import Home from "./Pages/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/home",
    element: <Home></Home>,
  },
  {
    path: "/about",
    element: <AboutMe></AboutMe>,
  },
  {
    path: "/projects",
    element: <Projects></Projects>,
  },
  {
    path: "/pr-Creacy",
    element: <Creacy></Creacy>,
  },
  {
    path: "/contact",
    element: <ContactMe></ContactMe>,
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
