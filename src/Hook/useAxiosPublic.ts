import axios, { AxiosInstance } from "axios";
 interface axiosPublic extends AxiosInstance{}
const AxiosPublic :axiosPublic = axios.create({
  baseURL: "https://the-mornong-post-server-omega.vercel.app",
  withCredentials: true ,
});
const useAxiosPublic = () => {
  return AxiosPublic;
};

export default useAxiosPublic;
