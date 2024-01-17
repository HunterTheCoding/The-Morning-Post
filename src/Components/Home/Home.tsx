import Bannar from "./Bannar/Bannar";
import FeatureNews from "./FeatureNews/FeatureNews.js";
import OurHistory from "./OurHistory/OurHistory.jsx"


const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <OurHistory></OurHistory>
            <FeatureNews></FeatureNews>
        </div>
    );
};

export default Home;
