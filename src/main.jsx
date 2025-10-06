import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./componets/Root/Root.jsx";
import Home from "./componets/Home/Home.jsx";
import Mobiles from "./componets/Mobiles/Mobiles.jsx";
import Laptops from "./componets/Laptops/Laptops.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "mobiles", Component: Mobiles },
      { path: "laptops", Component: Laptops },
    ],
  },
  {
    path: "about",
    element: <div>About me here</div>,
  },
  {
    path: "blogs",
    element: <div>All my blogs are here</div>,
  },
  {
    path: "blogs",
    element: <div>All my blogs are here</div>,
  },
  {
    path: "app",
    Component: App,
  },
  {
    path: "/app2",
    // element: <App></App>
    Component: App,
  },
  {
    path: "*",
    element: <h3>Not Found: 404 Status</h3>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
