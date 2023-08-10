import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddArticle from "./components/AddArticle.jsx";
import Articles from "./components/Articles.jsx";
import Login from "../src/components/auth/Login.jsx";
import Register from "../src/components/auth/Register.jsx";
import Article from "../src/components/Article.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Articles />,
      },
      {
        path: "/upload",
        element: <AddArticle />,
      },
      {
        path: "/signin",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/article/:id",
        element: <Article />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
