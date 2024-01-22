import axios from "axios";
import HotLightCard from "./HotLightCard";
import { useEffect, useState } from "react";


const HotLight = () => {
    const [featureFood, setFeatureFood] = useState([]);
    const allData = () => {
        axios.get("https://foods-donations-assignment.vercel.app/featureFood").then((res) => {
         
          setFeatureFood(res.data);
          console.log(featureFood);
        });
      };
      useEffect(() => {
        allData();
      }, []);

    return (
        <div className="bg-[url('https://www.bd-pratidin.com/assets/newDesktop/img/section-bg.png?v=1.0.0')]">
            <h1 className="text-3xl text-white text-center p-2">HotLights</h1>

            <div className="grid grid-cols-4">
                
            <div className="grid grid-cols-3 justify-center items-center mx-auto gap-10 my-10">
        {hotlightcard.map((news) => (
          <HotLightCard key={news?._id} news={news}></HotLightCard>
        ))}
      </div>

<div className="max-w-sm bg-white border p-5 m-3 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src="https://i.ibb.co/2ysw7F3/beautiful-landscape.jpg" alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
       
    </div>
</div>
            </div>
            


        </div>
    );
};

export default HotLight;