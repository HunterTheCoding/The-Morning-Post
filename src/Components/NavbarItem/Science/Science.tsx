import { Link } from "react-router-dom";
import useAdmin from "../../../Hook/useNews";

const Science = () => {
    const { newsData: Science,} =
    useAdmin("Science");



    return (
        <div className="border-2border-red-700 -mt-5">
            <div className="grid grid-cols-3 gap-10">
                <div className="lg:col-span-2 col-span-3 m-5">
                {Science.slice(0, 1).map((item) => {
            return (
        <div>
                 <Link to={`/newsdetails/${item._id}`}>
                 <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500 md:col-span-2" style={{ backgroundImage: `url(${item.image})` }}>
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>

              <h2 className="z-10 p-5">
                  <a rel="noopener noreferrer" href="#" className="text-2xl text-white font-bold text-md hover:underline dark:text-gray-100"> {item.headline}</a>
              </h2>
          </div>
          </Link>
          <hr className="border-1 text-black mt-4" />
              
        </div>
            );
          })}

                    {/*1st layout  */}

                    {/* 2nd layout */}
                    <div className="grid md:grid-cols-2 mt-5 gap-4" >

                    {Science.slice(1, 3).map((item) => {
                      
                        
            return (
                <Link to={`/newsdetails/${item._id}`}>
                <div className="border-r-2 pr-5 text-black">
                <img className="h-56 w-96" src={item.image} alt="" />
                <h2 className="text-blue-700 text-3xl font-bold">Space || <span className="text-2xl" >{item.headline}</span></h2>
            </div>
            </Link>
            )})};


         
                    </div>
                    {/* 3rd layout */}
                    {Science.slice(3).map((item) => {

            return (

                  <div>  <hr className="border-1 text-black mt-4" />
                   <Link to={`/newsdetails/${item._id}`}>
                  <div className="grid grid-cols-2 mt-10 gap-4">
                      <div>
                          <h2 className="text-blue-700 text-2xl font-bold">Space || <span className="text-2xl" >{item.headline}</span></h2>
                      </div>
                      <div>
                          <img className="h-56 w-96" src={item.image} alt="" />
                      </div>
                  </div>
                  </Link>
                  </div>
                    )})};
        
                    <div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Science;