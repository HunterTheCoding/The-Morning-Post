import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";
import { News } from "../../../Hook/useNews";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
const Jobs = () => {
  const AxiosPublic = useAxiosPublic();
  const { data: Jobs, isLoading } = useQuery({
    queryKey: ["api/v1/jobs"],
    queryFn: async () => {
      const res = await AxiosPublic.get(`/api/v1/jobs`);
      return res.data;
    },
  });
  if (isLoading) {
    return (
      <h1 className="text-2xl font bold text-center mt-[100px]">Loading</h1>
    );
  }
  return (
    <div>
      <div className="px-5">
        {" "}
        <h1 className="text-2xl font-bold py-5">Jobs</h1>
        <div className="border border-gray-400 mb-5 "></div>
      </div>
      <div className=" lg:flex">
        <div className="lg:w-3/4 w-full">
          <div className=" md:flex gap-5 p-5">
            {Jobs?.slice(0, 1)?.map((news1: News) => (
              <Link to={`${news1?.jobUrl}`} key={news1?._id}>
                <div className=" md:w-2/3  relative mb-5 md:mb-0 w-full  lg:w-[600px] h-[300px] md:h-[350px] rounded-md border">
                  <img
                    src={news1?.image}
                    className="w-full obj lg:w-[600px] md:w-full rounded-md md:h-[350px] h-[300px]"
                    alt=""
                  />
                  <h4 className="absolute w-full h-14 mt-4  text-white bottom-0 md:bottom-10 lg:bottom-0 font-2xl font-bold px-5">
                    {news1?.headline}
                  </h4>
                </div>
              </Link>
            ))}
            {Jobs?.slice(1, 2)?.map((news2: News) => (
              <Link to={`${news2?.jobUrl}`} key={news2?._id}>
                <div>
                  <div className="w-full  rounded-md h-[400px] md:h-[180px] ">
                    <img
                      className="w-full h-[250px] md:h-[160px] rounded-md"
                      src={news2?.image}
                      alt=""
                    />
                    <div className="mt-2 space-y-2 p-1 ">
                      <h1 className=" md:text-xl lg:text-lg font-medium">
                        {news2?.headline}
                      </h1>
                      <p className=" md:text-[14px] lg:text-[12px] font-normal text-gray-600">
                        {news2?.summary}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="border px-10"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 gap-3">
            {Jobs?.slice(2, Jobs.length)?.map((news3: News) => (
              <Link to={`${news3?.jobUrl}`} key={news3?._id}>
                <div className="w-[100%] border h-[400] bg-gray-200  md:h-[400px] lg:h-[400px] rounded-md">
                  <img
                    src={news3?.image}
                    className="h-[185px] w-full rounded-md"
                    alt=""
                  />
                  <div className="mt-3 p-1 lg:space-y-1 space-y-2 px-3">
                    <h1 className="text-lg lg:text-base  font-medium ">
                      {news3?.headline}
                    </h1>
                    <p className="text-[16px] lg:text-[14px]  font-normal">
                      {news3?.summary}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/4 border-l-2 p-5">
          <div className=" rounded-md flex justify-between border bg-gray-200">
            <h1 className="text-2xl px-2 text-black mt-1 font-bold ">
              Resent news
            </h1>
            <button className="bg-red-500 px-4 py-3 rounded-r-md ">
              <FaArrowCircleRight className="text-2xl text-white" />
            </button>
          </div>
          <div className="mt-4">
            {Jobs.slice(0, 5)?.map((item: News) => (
              <Link to="#" key={item?._id}>
                <div className="flex h-[150px] lg:h-[85px] w-[100%] bg-gray-200 rounded-md mb-4 ">
                  <img
                    className=" w-[230px] lg:w-[120px] h-[150px] lg:h-[85px] rounded-md"
                    src={item?.image}
                    alt=""
                  />
                  <p className=" text-lg lg:text-base font-medium py-2 px-2">
                    {item?.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
