import Bannar from "./Bannar/Bannar.js";
import Entertainment from "./Entertainment/Entertainment.js";
import FeatureNews from "./FeatureNews/FeatureNews.js";
import HotLight from "./HotLight/HotLight.js";
import International from "./International/International.js";
import National from "./National/National.js";
import OurHistory from "./OurHistory/OurHistory.js";
import Review from "./Review/Review.js";
// import Review from "./Review/Review.tsx"

const Home = () => {
  return (
    <div className="-mt-4">
      <Bannar></Bannar>
      <HotLight></HotLight>
      <OurHistory></OurHistory>
      <FeatureNews></FeatureNews>
      <National></National>
      <Entertainment></Entertainment>
      <Review></Review>
      <International></International>
    </div>
  );
};

export default Home;
