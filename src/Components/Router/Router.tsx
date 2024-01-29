import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Mainpage from "../Mainpage";

import Contact from "../../Pages/Contact/Contact";
import NavEntertainment from "../Home/Entertainment/NavEntertainment";
import NavNational from "../Home/National/NavNational";
import Business from "../NavbarItem/Business/Business";
import NewsDetails from "../NavbarItem/NewsDetails/NewsDetails";
import Science from "../NavbarItem/Science/Science";
import Sport from "../NavbarItem/Sport/Sport";
import Login from "../../Pages/Register/Login";

import World from "../NavbarItem/World/World";
import Jobs from "../OtherSection/Jobs/Jobs";
import Donation from "../OtherSection/Donation/Donation";
import LiveTelecast from "../OtherSection/Live-telecast/LiveTelecast";
import Photo from "../NavbarItem/Photo/Photo";
import ErrorPage from "../../Pages/ErrorPage/Error";
import Signup from "../../Pages/Register/Signup";




const Mybrowser = createBrowserRouter([
  {
    path: "/",
    element: <Mainpage></Mainpage>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/Contact-US",
        element: <Contact></Contact>
      },
      {
        path:'/entertainment',
        element:<NavEntertainment></NavEntertainment>
      },
      {
        path:'/national',
        element:<NavNational></NavNational>
      },
      {
        path:'/business',
        element:<Business></Business>
      },
      {
        path:'/newsdetails/:id',
        element:<NewsDetails></NewsDetails>
      },
      {
        path:'/science',
        element:<Science></Science>
      },
      {
        path:'/sport',
        element:<Sport></Sport>
      },
      {
        path:'/world',
        element:<World></World>
      },
      {
        path:'/Login',
        element:<Login></Login>
      },
      {
        path:'/SignUp',
        element:<Signup></Signup>
      },
      {
        path:'/jobs',
        element:<Jobs></Jobs>
      },
      {
        path:'/donation',
        element:<Donation></Donation>
      },
      {
        path:'/live-telecast',
        element:<LiveTelecast></LiveTelecast>
      },
      {
        path:"/picture",
        element:<Photo></Photo>
      }
      
    ]
  },
]);


export { Mybrowser }