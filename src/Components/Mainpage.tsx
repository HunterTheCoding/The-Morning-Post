import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Navbar/Footer";
import useAxiosPublic from "../Hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";




const Mainpage = () => {
    function requestNotificationPermission() {
        return new Promise((resolve, reject) => {
          Notification.requestPermission().then(permission => {
            resolve(permission);
          }).catch(error => {
            reject(error);
          });
        });
      }
      
      // Example usage
      requestNotificationPermission().then(permission => {
        if (permission === 'granted') {
          // Permission granted, proceed with notifications
        } else {
          // Handle other cases (denied or default)
        }
      }).catch(error => {
        console.error('Error requesting notification permission:', error);
      });

      useEffect(() => {
        requestNotificationPermission();
      }, []);

    const AxiosPublic = useAxiosPublic();
    const { isPending, error, refetch, data: Live } = useQuery({
        queryKey: ["Live-Link"],
        queryFn: async () => {
            const res = await AxiosPublic.get(`/live`);
            return res.data;
        },
    });
    if (isPending) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message
    refetch()

    return (
        <div>
            <div className="... sticky top-0">{Live.map((d: any) =><Link key={d?._id} to={d?.Link}><button className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 btn-sm font-medium rounded-lg text-sm px-5 text-center me-2 mb-2">Live</button></Link>)}</div>
            <div>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
            <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
        </div>
    );
};

export default Mainpage;
