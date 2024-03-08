import { useQuery } from "@tanstack/react-query";
import Context from "./useContext";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user , loading } = Context();
  const axiosSecure = useAxiosSecure();

  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["requestAdmin", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/admin/${user?.email}`);
      return res.data;
    },
  });
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
