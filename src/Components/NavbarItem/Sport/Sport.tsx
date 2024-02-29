import { Link } from "react-router-dom";
import useAdmin from "../../../Hook/useNews";
const Sport = () => {
  const { newsData: SportData, isLoading: SportDataLoading } = useAdmin("Sports");
  if(SportDataLoading){
    return <h1 className="text-2xl font bold text-center mt-[100px]">Loading</h1>
  }
  return (
    <div className="pb-5">
      <div className="lg:flex gap-5">
        <div className="max-w-[980px] grid gap-5">
          {/* grid grid-rows-2  */}
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="col-span-2">
              {SportData.slice(0, 1).map((item) => (
                <Link key={item?._id} to={`/newsdetails/${item?._id}`}>
                  <div>
                    <div className="max-h-96 h-full object-cover overflow-hidden bg-white relative">
                      <div>
                        <img
                          className=" h-full w-full object-cover overflow-hidden"
                          src={item.image}
                          alt=""
                        />
                      </div>

                      <div className="absolute bottom-0 p-5">
                        <a href="#">
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                            {item.headline}
                          </h5>
                        </a>
                        <p className="mb-3 font-normal text-white">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            {/* <div>hello</div> */}
            {/* <span>hell</span> */}
            <div>
              {SportData.slice(0, 1).map((item) => (
                <Link key={item?._id} to={`/newsdetails/${item?._id}`}>
                  <div className=" h-full">
                    <div className="h-full bg-white  border-l pl-4 ">
                      <a href="#">
                        <img
                          className="w-full min-h-56 object-cover"
                          src={item.image}
                          alt=""
                        />
                      </a>
                      <div className="p-5 pl-0">
                        <a href="#">
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {item.headline}
                          </h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="border  border-gray-300"></div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {SportData.slice(1, 4).map((item) => (
              <Link key={item?._id} to={`/newsdetails/${item?._id}`}>
                <div className="bg-white  first:pr-4 last:pl-4 border-gray-200 first:border-r last:border-l">
                  <a href="#">
                    <img
                      className="w-full min-h-56 object-cover"
                      src={item.image}
                      alt=""
                    />
                  </a>
                  <div className="p-5 pl-0">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {item.headline}
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      <h1>hello orld</h1>
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="border border-gray-300"></div>

        <div className="border w-full">
          <div className="">
            <h1 className="text-2xl text-center bg-green-700 block p-5 text-white">
              Summary
            </h1>
            <p className="p-5">
              It seems like you're looking for a brief summary or update on
              business-related news or activities for today. However, I don't
              have real-time data or access to current news updates. If you have
              specific questions or topics you'd like information on, feel free
              to provide more details, and I'll do my best to assist you based
              on the information available up to my last training cut-off in
              January 2022. If you have access to news sources or specific
              topics you're interested in, that could be a good starting point
              for discussing today's business summary.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sport;
