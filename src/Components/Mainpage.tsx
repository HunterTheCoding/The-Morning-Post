import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Navbar/Footer";
import useAxiosPublic from "../Hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { getToken } from "@firebase/messaging";
import { messaging } from "./Firbase/Firebase.config";


const Mainpage = () => {
    async function requestPermission() {
        const permission = await Notification.requestPermission();
        if (permission === "granted") {
          // Generate Token
          const token =await getToken(messaging, { vapidKey: "BCLdO29NdIfiWxYW8GcKcjL3_z3-VyT88zf1L66EtOPVzQC_vTkvRU5HBJaLHCjAeA0jDu2XnhGvqVgcU7nxPG0" })
          console.log(token);  
          // Send this token  to server ( db)
        } else if (permission === "denied") {
          alert("You denied for the notification");
        }
      }
    
      useEffect(() => {
        // Req user for notification permission
        requestPermission();
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
        <div className="-mt-6">
            <div className="... sticky top-2 z-20">{Live.map((d: any) => <Link key={d?._id} to={d?.Link}><button className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 btn-sm font-medium rounded-lg text-sm px-5 text-center me-2 mb-2">Live</button></Link>)}</div>
            <div>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Mainpage;
