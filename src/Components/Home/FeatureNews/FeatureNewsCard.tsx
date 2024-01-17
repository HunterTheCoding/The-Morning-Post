


const FeatureNewsCard = ({news}) => {
    const {id} = news
    console.log(news);
    
    return (
        <div>
            <h1 className="text-7xl">{id}</h1>
        </div>
    );
};

export default FeatureNewsCard;