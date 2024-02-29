import React from "react";
import useAdmin, { News } from "../../../Hook/useNews";
import HotLightCard from "./HotLightCard";
const HotLight: React.FC = () => {
  const { newsData: hotLights, isLoading: hotLightsLoading } =
    useAdmin("HotLight");
  return (
    <div className="px-5">
      <div>
        <h1 className=" text-xl lg:text-[32px] font-bold mb-10 mt-5 text-center">
          Hot light
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center mx-auto gap-5 ">
        {hotLightsLoading ? (
          <p>Loading...</p>
        ) : hotLights && hotLights.length > 0 ? (
          hotLights.map(
            (
              news: News // Ensure hotLights is an array and map through it
            ) => <HotLightCard news={news} key={news._id}></HotLightCard>
          )
        ) : (
          <p>No news data available</p>
        )}
      </div>
    </div>
  );
};

export default HotLight;
