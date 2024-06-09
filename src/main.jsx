import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import AboutMe from "./Pages/AboutMe/AboutMe";
import Projects from "./Pages/Projects/Projects";
import ContactMe from "./Pages/ContactMe/ContactMe";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
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
    path: "/contact",
    element: <ContactMe></ContactMe>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
