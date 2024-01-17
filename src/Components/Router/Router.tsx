import { createBrowserRouter } from "react-router-dom";

import Home from "../Home/Home";
import Mainpage from "../Mainpage";
import Error from "../Error/Error";
import Signin from "../Resister/Signin";
import Signup from "../Resister/Signup";
import OurHistory from "../Home/OurHistory/OurHistory";
import FeatureNews from "../Home/FeatureNews/FeatureNews";



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
      {
        path:'/login',
        element:<Signin></Signin>
      },
      {
        path:'/signup',
        element:<Signup></Signup>
      },
   
    ]
  },
]);


export { Mybrowser }