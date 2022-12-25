import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Countries from "../Pages/Countries/Countries";
import Blogs from "../Pages/Blogs/Blogs";
import Italy from "../Pages/Countries/Italy";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    // errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/countries",
        element: <Countries></Countries>,
      },
      {
        path: "/italy",
        element: <Italy></Italy>,
      },
    ],
  },
]);

export default router;
