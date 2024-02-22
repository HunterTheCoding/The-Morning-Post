import { SubmitHandler, useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import Swal from "sweetalert2";

type Inputs = {
    Link: string,
}

const LiveClient = () => {
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
            const live = {
                Link: data.Link,
            }
            const newsRes = await axiosPublic.post('/live', live);
            console.log(newsRes);
            if (newsRes.data.insertedId) {
                reset();
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `Link is added successfully`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
    }
    return (
        <div>
            <h1 className="text-center font-bold my-4 text-4xl ">Post News</h1>
            <div className="bg-gray-200 p-4 rounded-lg m-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="md:flex gap-6">
                        {/* section */}
                        <div className="form-control md:w-1/2 w-full my-6">
                            <label className="label">
                                <span className="label-text text-red-600 font-bold">Link Add*</span>
                            </label>
                            <input type="text" placeholder="Link" {...register('Link', { required: true })} required className="input input-bordered w-full " />
                        </div>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary">
                            Add Link
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LiveClient;