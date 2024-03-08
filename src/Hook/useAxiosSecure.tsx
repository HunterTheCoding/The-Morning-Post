/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect } from "react";
import Context from "./useContext";
import { useNavigate } from "react-router-dom";

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
        if (error.response.status === 401 || error.response.status === 403) {
          logOut()
            .then(() => {
              navigate("/login");
            })
            .catch((error) => console.log(error));
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

