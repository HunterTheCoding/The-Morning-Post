import { Link } from "react-router-dom";
import { News } from "../../../Hook/useNews";
interface HotLightCardProps {
  news: News;
}
const HotLightCard: React.FC<HotLightCardProps> = ({ news: News }) => {
  const { _id, headline, summary, image } = News;
  return (
    <div>
      <Link to={`/newsdetails/${_id}`}>
        <div className="w-full h-96  bg-white border  border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700">
          <img src={image} alt="image" className="h-40 rounded-md w-full" />
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                {headline}
              </h5>
            </a>
            <p
              className={`mb-3 font-normal text-gray-700 dark:text-gray-400 ${"line-clamp-3"}`}
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
