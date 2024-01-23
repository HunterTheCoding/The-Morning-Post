import React, { useState } from "react";
import { News } from "./HotLight";
import { Link } from "react-router-dom";

interface HotLightCardProps {
  news: News;
}

const HotLightCard: React.FC<HotLightCardProps> = ({ news }) => {
  const {  headline,summary, image } = news;
  const [showFullSummary, setShowFullSummary] = useState(false);



  return (
    <div>
      <Link to={"/"}>
        <div className="w-full h-96  bg-white border p-5 m-3 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img src={image} alt="image" className="h-40 w-full" />
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{headline}</h5>
            </a>
            <p      
              className={`mb-3 font-normal text-gray-700 dark:text-gray-400 ${
               "line-clamp-3"
              }`}
            >
              {summary}
            </p>
      
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HotLightCard;
