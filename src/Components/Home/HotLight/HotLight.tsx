import React from "react";
import useAdmin, { News } from "../../../Hook/useNews"; // Import the News interface from useNews
import HotLightCard from "./HotLightCard";

const HotLight: React.FC = () => {
  // Destructuring the returned object from useAdmin
  const { newsData: hotLights, isLoading: hotLightsLoading } =
    useAdmin("HotLight");
  // const {_id, section, headline, source, date, summary, details, image} =hotLights;

  return (
    <div
      className="p-5"
      style={{
        backgroundImage:
          "url('https://www.bd-pratidin.com/assets/newDesktop/img/section-bg.png?v=1.0.0')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        // Set a minimum height to cover the entire viewport height
      }}
    >
      <h1 className="text-3xl text-white text-center p-2">HotLights</h1>

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
