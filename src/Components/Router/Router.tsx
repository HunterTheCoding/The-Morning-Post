import { createBrowserRouter } from "react-router-dom";

import Home from "../Home/Home";
import Mainpage from "../Mainpage";
import Error from "../Error/Error";
import Contact from "../../Pages/Contact/Contact";
import NavEntertainment from "../Home/Entertainment/NavEntertainment";
import NavNational from "../Home/National/NavNational";
import Business from "../NavbarItem/Business/Business";
import NewsDetails from "../NavbarItem/NewsDetails/NewsDetails";
import Science from "../NavbarItem/Science/Science";
import Sport from "../NavbarItem/Sport/Sport";
import Login from "../../Pages/Register/Login";
import Signup from "../../Pages/Register/Signup";
import World from "../NavbarItem/World/World";
import Jobs from "../OtherSection/Jobs/Jobs";
import Donation from "../OtherSection/Donation/Donation";
import LiveTelecast from "../OtherSection/Live-telecast/LiveTelecast";
import Pdf from "../OtherSection/Pdf/Pdf";


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
        path:'/pdf',
        element:<Pdf></Pdf>
      },
      
    ]
  },
]);


export { Mybrowser }