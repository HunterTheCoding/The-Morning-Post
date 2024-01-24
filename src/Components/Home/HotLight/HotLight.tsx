import React from "react";
import useAdmin from "../../../Hook/useNews";
import HotLightCard from "./HotLightCard";

export interface News {
  _id: string;
  section: string;
  headline: string;
  source: string;
  date: string;
  summary: string;
  details: string;
  image: string;
  // other properties...
}

const HotLight: React.FC = () => {
  // Pass the desired news section to the useAdmin hook
  const [isNews, isNewsLoading] = useAdmin("HotLight");

  return (
    <div className="p-5"
      style={{
        backgroundImage: "url('https://www.bd-pratidin.com/assets/newDesktop/img/section-bg.png?v=1.0.0')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        // Set a minimum height to cover the entire viewport height
      }}
    >
      <h1 className="text-3xl text-white text-center p-2">HotLights</h1>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center mx-auto gap-5 ">
        {isNewsLoading ? (
          <p>Loading...</p>
        ) : isNews ? (
          isNews.map((news: News) => (
            <HotLightCard news={news} key={news._id}></HotLightCard>
          ))
        ) : (
          <p>No news data available</p>
        )}
      </div>
    </div>

  );
};

export default HotLight;
