import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
export interface news {
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
    news:string
  }
const useSingleNews = (id : string | undefined) => {
    const  AxiosPublic = useAxiosPublic();


    const { data:news,isLoading:newsloading} = useQuery({
        queryKey: ["singlenews",id],
        queryFn: async () => {
          const res = await AxiosPublic.get(`/singlenews/${id}`);
     
          return res.data;
        },
      });
    return {news,newsloading}
};

export default useSingleNews;