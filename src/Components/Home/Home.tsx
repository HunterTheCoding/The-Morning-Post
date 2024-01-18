import Login from "../Resister/Login.js";
import Bannar from "./Bannar/Bannar";
import FeatureNews from "./FeatureNews/FeatureNews.js";
import OurHistory from "./OurHistory/OurHistory.jsx"


const Home = () => {
    return (
        <div>
          
            <Bannar></Bannar>
            <OurHistory></OurHistory>
            <FeatureNews></FeatureNews>
            <Login></Login>
        
        </div>
    );
};

export default Home;
