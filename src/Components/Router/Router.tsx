import { createBrowserRouter } from "react-router-dom";

import Home from "../Home/Home";
import Mainpage from "../Mainpage";
import Error from "../Error/Error";



const Mybrowser = createBrowserRouter([
  {
    path: "/",
    element: <Mainpage></Mainpage>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
    ]
  },
]);


export { Mybrowser }