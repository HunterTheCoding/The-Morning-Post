import { useParams } from "react-router-dom";
import useSingleNews from "../../../Hook/useSingleNews";


const EditNews: React.FC = () => {

    const { id } = useParams();
    const { news } = useSingleNews(id);
    console.log(news);

    return (
        <div>

        </div>
    );
};

export default EditNews;