import { Link } from "react-router-dom";
import "./Nation.css";
import useAdmin from "../../../Hook/useNews";
const National = () => {
  const { newsData: National } = useAdmin("National");
  return (
    <div className="mt-5 mb-5">
      <h1 className=" text-xl lg:text-2xl font-bold p-5">National</h1>
      <div className="border lg:mb-5"></div>
      <div className="md:flex lg:gap-5 p-5">
        {National?.slice(0, 1)?.map((news1) => (
          <Link key={news1?._id} to={`/newsdetails/${news1?._id}`}>
            <div className=" mr-2 lg:mr-6 relative mb-5 md:mb-0 w-full md:w-[400px] lg:w-[550px] h-[420px] md:h-[400px] rounded-md border">
              <img
                src={news1?.image}
                className="w-full obj lg:w-[550px] md:w-[400px] rounded-md h-[350px]"
                alt=""
              />
              <h4 className="absolute w-full h-14 mt-4  text-white bottom-16 md:bottom-12 font-2xl font-bold px-5">
                {news1?.headline}
              </h4>
              <p className="text-base font-medium ml-4 py-2">
                {news1?.headline}
              </p>
            </div>
          </Link>
        ))}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] lg:gap-6">
          {National?.slice(1, National.length)?.map((news2) => (
            <Link key={news2?._id} to={`/newsdetails/${news2?._id}`}>
              <div className="w-full mb-5 md:mb-0 object-cover  md:w-[100%] lg:w-[100%] h-[200px] md:h-[220px] lg:h-[224px] border rounded-md ">
                <img
                  className=" w-full md:w-[100%] lg:w-[100%] h-[150px] md:h-[110px] rounded-md "
                  src={news2?.image}
                  alt=""
                />
                <h1 className="p-1 text-black lg:py-1 text-[14px] md:text-[12px] py-2 lg:text-base font-medium px-2">
                  {news2?.headline}
                </h1>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default National;
