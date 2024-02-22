import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useState } from "react";

export interface News {
  _id: string;
  section: string;
  headline: string;
  source: string;
  date: string;
  summary: string;
  details: string;
  image: string;
  title: string;
  writer: string;
jobUrl:string
  // other properties...
}

const useAdmin = (newsSection: string | undefined) => {
  const AxiosPublic = useAxiosPublic();
  const [newsData, setNewsData] = useState<News[]>([]); // State to hold news data

  const { isLoading: isLoadingNews } = useQuery({
    queryKey: ["requestNews", newsSection],
    queryFn: async () => {
      const res = await AxiosPublic.get(`/News/${newsSection}`);
      setNewsData(res.data); // Set news data to state
      return res.data;
    },
  });

  return { newsData, isLoading: isLoadingNews };
};

export default useAdmin;
