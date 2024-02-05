import axios, { AxiosInstance } from "axios";
 interface axiosPublic extends AxiosInstance{}
const AxiosPublic :axiosPublic = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true ,
});
const useAxiosPublic = () => {
  return AxiosPublic;
};

export default useAxiosPublic;
