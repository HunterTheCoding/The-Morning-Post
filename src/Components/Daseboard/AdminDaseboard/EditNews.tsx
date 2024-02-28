import { useParams } from "react-router-dom";
import useSingleNews from "../../../Hook/useSingleNews";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    section: string,
    headline: string,
    source: string,
    date: string,
    title: string,
    writer: string,
    image: string,
    summary: string,
    news: string
}

const EditNews: React.FC = () => {

    const { id } = useParams();
    const { news } = useSingleNews(id);
    console.log(news);

    const { register, handleSubmit, reset } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async(data) =>{
        console.log(data);
    }

    return (
        <div>
            <h1 className="text-center font-bold my-4 text-4xl ">Update News</h1>
            <div className="bg-gray-200 p-4 rounded-lg m-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                    
                </form>
            </div>
        </div>
    );
};

export default EditNews;