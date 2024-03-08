/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect } from "react";
import Context from "./useContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const axiosSecure = axios.create({
  baseURL: "https://the-mornong-post-server-omega.vercel.app",
  // baseURL: "http://localhost:5000",
  withCredentials: true,
});
const useAxiosSecure = () => {
  const { logOut } = Context();
  const navigate = useNavigate();
  useEffect(() => {
    const interceptor = axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
    // toast.error("error tracked in the interceptor", error.response);
        if (error.response.status === 401 || error.response.status === 403) {
       toast.error("logout the user");
          logOut()
            .then(() => {
              navigate("/login");
            })
            .catch((error) => toast.error(error));
        }
      }
    );

    return () => {
      // Clean up by ejecting the interceptor when component unmounts
      axiosSecure.interceptors.response.eject(interceptor);
    };
  }, [logOut, navigate]);

  return axiosSecure;
};

export default useAxiosSecure;

