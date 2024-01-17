import { useEffect, useState } from "react";
import FeatureNewsCard from "./FeatureNewsCard";

interface NewsItem {
    id: number;
    headline: string;
    writer: string;
    image: string;
    date: string;

}
const FeatureNews = () => {
    const [featureData, setFeatureData] = useState<NewsItem[]>([]);

    useEffect(()=>{
        fetch("/featureData.json")
        .then(res => res.json())
        .then(data => setFeatureData(data))
    }, [])
    // console.log(featureData);
    
    return (
        <div>
            <h1>{featureData.length} </h1>
            <div>
                {
                  featureData.map((news: NewsItem) => <FeatureNewsCard key={news.id} news={news}></FeatureNewsCard>)
                }
            </div>
        </div>
    );
};

export default FeatureNews;