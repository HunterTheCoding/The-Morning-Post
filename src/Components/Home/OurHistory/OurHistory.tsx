import { Link } from "react-router-dom";
import { FaRegClock } from "react-icons/fa";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import Rating from "react-rating";
import useAdmin, { News } from "../../../Hook/useNews";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FixedRating = Rating as any;
const OurHistory = () => {
  const { newsData: history } = useAdmin("history");
  return (
    <div className="mt-10 lg:flex ">
      <div className="lg:w-2/3 w-full p-3">
        <div className="flex justify-between w-full lg:w-full">
          <h1 className="text-xl lg:text-2xl font-bold p-1">OUR HISTORY</h1>
          <button className=" text-base  font-serif lg:text-xl border px-2 lg:px-5 rounded-lg bg-slate-300">
            View All
          </button>
        </div>
        <hr className="w-full lg:w-full bg-green-500   mt-5 mb-5 " />
        <div className="md:flex justify-between w-full  lg:w-full  ">
          <div className=" w-full lg:w-[50%] ">
            {history?.slice(0, 1).map((news1: News) => (
              <Link to={`/newsdetails/${news1?._id}`} key={news1?._id}>
                <div className=" w-full lg:w-[400px]  bg-base-100 rounded-md">
                  <figure>
                    <img
                      className="lg:h-[280px] md:h-[350px] h-[175px] w-full lg:w-full rounded-md"
                      src={news1?.image}
                      alt="pic"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title text-xl w-[90%] lg:text-xl font-medium ">
                      {news1?.headline}
                    </h2>
                    <div className="card-actions text-gray-400">
                      <div className="badge px-1 font-medium ">Jone deo</div>
                      <div className="flex font-medium ">
                        <FaRegClock className="text-base" />
                        <p className=" -mt-1 ml-2 text-base  ">{news1?.date}</p>
                      </div>
                    </div>
                    <p className="text-base font-normal">{news1?.summary}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="w-full lg:w-[50%]">
            {history?.slice(3, 5).map((news2: News) => (
              <Link key={news2?._id} to={`/newsdetails/${news2?._id}`}>
                <div className="flex border-b-2 py-2 mb-1 p-2  w-full lg:w-full">
                  <img
                    className=" w-[60px] h-[50px] lg:w-[100px] lg:h-[70px] mr-4  rounded-md"
                    src={news2?.image}
                    alt=""
                  />

                  <div className="mb-1">
                    <h1 className="text-base w-full lg:w-full font-normal lg:text-lg lg:font-medium ">
                      {news2?.headline}
                    </h1>
                    <div className="flex mt-2 text-[12px] lg:text-base text-gray-400">
                      <FaRegClock className="mr-2" />
                      <p className="-mt-1 ">{news2?.date}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full md:w-[400px] p-3 mt-5 lg:mt-0 lg:w-1/3 ">
        <div className="w-full lg:w-full">
          <h1 className=" text-xl font-bold mb-7 lg:text-2xl ">
            POPULAR POSTS
          </h1>
          <hr className="w-full " />
        </div>
        <div className="  ">
          {history?.slice(1, 2)?.map((news3: News) => (
            <Link key={news3?._id} to={`/newsdetails/${news3?._id}`}>
              <div
                className="hero h-[250px] w-full lg:w-full rounded-md  relative  bg-black  mt-5 "
                style={{ backgroundImage: `url(${news3?.image})` }}
              >
                <div className="absolute bottom-8 px-2">
                  <p className="text-2xl font-semibold text-white">
                    {news3?.headline}
                  </p>
                  <FixedRating
                    className="text-blue-400 mr-4 text-xl"
                    placeholderRating={4.5}
                    emptySymbol={<IoIosStarOutline />}
                    placeholderSymbol={<IoIosStar />}
                    fullSymbol={<IoIosStarHalf />}
                  />
                </div>
              </div>
            </Link>
          ))}
          <div className="w-full ">
            {history?.slice(4, history.length)?.map((news4: News) => (
              <Link key={news4?._id} to={`/newsdetails/${news4?._id}`}>
                <div className="flex border-b-2 py-2 mb-1 p-2  w-full lg:w-full">
                  <img
                    className=" w-[60px] h-[50px] lg:w-[100px] lg:h-[68px] mt-[10px] mr-4 rounded-md "
                    src={news4?.image}
                    alt=""
                  />

                  <div className="mb-1">
                    <h1 className="text-base w-full lg:w-full font-normal lg:text-lg lg:font-medium ">
                      {news4?.headline}
                    </h1>
                    <FixedRating
                      className="text-blue-400 mr-4 text-xl"
                      placeholderRating={3.5}
                      emptySymbol={<IoIosStarOutline />}
                      placeholderSymbol={<IoIosStar />}
                      fullSymbol={<IoIosStarHalf />}
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurHistory;
