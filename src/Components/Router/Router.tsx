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
import Daseboard from "../Daseboard/Daseboard";
import AdminHome from "../Daseboard/AdminDaseboard/AdminHome";
import Jobspost from "../Daseboard/AdminDaseboard/Jobspost";
import News from "../Daseboard/AdminDaseboard/News";
import NewsPost from "../Daseboard/AdminDaseboard/NewsPost";
import Addjobs from "../Daseboard/AdminDaseboard/Addjobs";
import UserHome from "../Daseboard/UserDaseboard/UserHome";
import BooksMarks from "../Daseboard/UserDaseboard/BooksMarks";
import AllDonation from "../Daseboard/UserDaseboard/AllDonation";
import LiveSection from "../Daseboard/AdminDaseboard/LiveSection";
import UserDonation from "../Daseboard/AdminDaseboard/UserDonation";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import Error from "../Error/Error";
import EditNews from "../Daseboard/AdminDaseboard/EditNews";
import NewPoll from "../Daseboard/AdminDaseboard/new-poll";
import UpdateJobs from "../Daseboard/AdminDaseboard/UpdateJobs";
import HomePage from "../Survey/Servey";
import LiveClient from "../Daseboard/AdminDaseboard/LiveClient";
import Quiz from "../Daseboard/UserDaseboard/Quiz/Quiz";
import NewsUpdate from "../Daseboard/AdminDaseboard/NewsUpdate";
import Signup from "../../Pages/Register/Signup";


const Mybrowser = createBrowserRouter([
  {
    path: "/",
    element: <Mainpage></Mainpage>,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Contact-US",
        element: <Contact></Contact>,
      },
    
      {
        path: "/entertainment",
        element: <NavEntertainment></NavEntertainment>,
      },
      {
        path: "/national",
        element: <NavNational></NavNational>,
      },
      {
        path: "/business",
        element: <Business></Business>,
      },
      {
        path: "/newsdetails/:id",
        element: <NewsDetails></NewsDetails>,
      },
      {
        path: "/science",
        element: <Science></Science>,
      },
      {
        path: "/sport",
        element: <Sport></Sport>,
      },
      {
        path: "/world",
        element: <World></World>,
      },
      {
        path: "/Login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element:<Signup></Signup>
      },
 
      {
        path: "/jobs",
        element: <Jobs></Jobs>,
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
      },
      {
        path: "/live-telecast",
        element: <LiveTelecast></LiveTelecast>,
      },
      {
        path: "/picture",
        element: <Photo></Photo>,
      },
      {
        path: "/survay",
        element: <HomePage></HomePage>
      },
    ],
  },
  {
    path: "/daseboard",
    element: (
      <PrivateRoute>
        <Daseboard></Daseboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "adminhome",
        element: (
          <PrivateRoute><AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute></PrivateRoute>
        ),
      },
      {
        path: "Add-poll",
        element: (
        <AdminRoute>
          <NewPoll></NewPoll>
        </AdminRoute>
        ),
      },

      {
        path: "jobs",
        element: <Jobspost></Jobspost>,
      },
      {
        path: "addjobs",
        element: <Addjobs></Addjobs>,
      },
      {
        path: "updateJobs/:id",
        element: <UpdateJobs></UpdateJobs>,
        loader: ({ params }) => fetch(`https://the-mornong-post-server-omega.vercel.app/api/v1/job/${params.id}`)
      },
      {
        path: "news",
        element: <News></News>,
      },
      {
        path: "addnews",
        element: <NewsPost></NewsPost>
      },
      {
        path: "editnews/:id",
        element: <EditNews></EditNews>
      },
      {
        path: "live",
        element: <LiveSection></LiveSection>,
      },
      {
        path: "liveClient",
        element: <LiveClient />,
      },
      {
        path: "userdonation",
        element: <UserDonation></UserDonation>,
      },
      {
        path: "userhome",
        element: <UserHome></UserHome>,
      },
      {
        path: "bookmarks",
        element: <BooksMarks></BooksMarks>,
      },
      {
        path: "alldonation",
        element: <AllDonation></AllDonation>,
      },
      {
        path: "quiz",
        element: <Quiz></Quiz>,
      },
      {
        path: "newsupdate/:id",
        element: <NewsUpdate></NewsUpdate>,
      }
    ],
  },
]);

export { Mybrowser };