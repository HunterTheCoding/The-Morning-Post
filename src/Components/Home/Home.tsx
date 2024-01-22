
import Bannar from "./Bannar/Bannar.js";
import Entertainment from "./Entertainment/Entertainment.js";
import FeatureNews from "./FeatureNews/FeatureNews.js";
import HotLight from "./HotLight/HotLight.js";
import National from "./National/National.js";
import OurHistory from "./OurHistory/OurHistory.js";




const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <HotLight></HotLight>
            <OurHistory></OurHistory>
            <FeatureNews></FeatureNews>
            <National></National>
            <Entertainment></Entertainment>
           
        </div>
    );
};

export default Home;
