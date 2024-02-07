/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect } from "react";
import Context from "./useContext";
import { useNavigate } from "react-router-dom";


export const axiosSecure = axios.create({
  // baseURL: "https://the-mornong-post-server-omega.vercel.app",
  baseURL: "http://localhost:5000",
  withCredentials: true,
});
const useAxiosSecure = () => {
  const { logOut } = Context();
  const navigate = useNavigate();
  useEffect(() => {
    const interceptor = axiosSecure.interceptors.response.use(
      (res) => {
        console.log(res,"ressss");
        return res;
      },
(error) => {
  console.log("error tracked in the interceptor", error.response);
  if (error.response.status === 401 || error.response.status === 403) {
    console.log('logout the user')
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

// http://localhost:5000/
// https://the-mornong-post-server-omega.vercel.app/
