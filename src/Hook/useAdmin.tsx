import { useQuery } from "@tanstack/react-query";
import Context from "./useContext";
import useAxiosPublic from "./useAxiosPublic";

const useAdmin = () => {
  const { user } = Context();
  const AxiosPublic = useAxiosPublic();

  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["requestAdmin", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await AxiosPublic.get(`/admin/${user?.email}`);
      return res.data;
    },
  });
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
