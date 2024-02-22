import { useForm, SubmitHandler } from "react-hook-form";

const News = () => {

    const { register, handleSubmit, reset } = useForm();

    return (
        <div>
            <h1 className="text-center font-bold my-4 text-4xl ">Post News</h1>
            <div className="bg-gray-200 p-4 rounded-lg m-4">
                <form>
                    
                </form>
            </div>
        </div>
    );
};

export default News;