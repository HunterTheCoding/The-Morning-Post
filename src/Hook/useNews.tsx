import { useQuery } from "@tanstack/react-query";

// import useAxiosSecure from "./useAxiosSecure";
import useAxiosPublic from "./useAxiosPublic";



const useAdmin = (newsSection: string |undefined) => {

  // const [admin,setAdmin]=useState()
  // const axiosSecure = useAxiosSecure();
  const AxiosPublic = useAxiosPublic();


  const { data: isNews, isLoading: isNewsLoading } = useQuery({
    queryKey: ["requestNews", newsSection],
    // enabled: !!user?.email,
    queryFn: async () => {
      const res = await AxiosPublic.get(`/News/${newsSection}`);
      console.log( res.data);
      return res.data;
    },
  });
  return [isNews, isNewsLoading];
};

export default useAdmin;
