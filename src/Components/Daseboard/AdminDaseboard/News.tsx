import { useForm, SubmitHandler } from "react-hook-form";

const News = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit: SubmitHandler<Inputs> = async (data) =>{
        console.log(data);
    }

    return (
        <div>
            <h1 className="text-center font-bold my-4 text-4xl ">Post News</h1>
            <div className="bg-gray-200 p-4 rounded-lg m-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                    
                </form>
            </div>
        </div>
    );
};

export default News;