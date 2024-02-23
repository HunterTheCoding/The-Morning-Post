import { useForm } from "react-hook-form"
import useAxiosPublic from "../../../Hook/useAxiosPublic"
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

interface loaderData {
    _id: string;
    headline: string;
    image: string;
    summary: string;
    date: string;
    section: string;
    jobUrl: string;
}
const UpdateJobs = () => {
    const axiosPublic = useAxiosPublic()
    const { headline, image, summary, date, section, jobUrl, _id } = useLoaderData() as loaderData
    
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data : any) => {
        console.log(data)
        const jobsinfo = {
            headline: data.headline,
            image: data.img,
            summary: data.summary,
            date: data.date,
            section: data.section,
            jobUrl: data.jobUrl,
          
        };
        // reset()
        console.log(jobsinfo)
        const jobInfo = await axiosPublic.patch(`/api/v1/jobs/${_id}`, jobsinfo);
        console.log(jobInfo.data)
        if (jobInfo.data.insertedId) {
            reset();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Item add Successfully ',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }
    return (
        <div className="bg-green-100 py-10">
        <h1 className="text-center font-semibold text-2xl">Update jobs</h1>
            <div className="px-10">
         
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 lg:grid-cols-2  gap-5">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Headline</span>
                            </label>
                            <input type="text" defaultValue={headline} {...register("headline", { required: true })} placeholder="Headline" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Section</span>
                            </label>
                            <input type="text" defaultValue={section}  {...register("section", { required: true })} placeholder="section" readOnly  className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="text" defaultValue={image} {...register("img", { required: true })} placeholder="Image" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Summary</span>
                            </label>
                            <input type="text" defaultValue={summary} {...register("summary", { required: true })} placeholder="Summry" className="input input-bordered w-full" />

                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" defaultValue={date} {...register("date", { required: true })} placeholder="Date" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Job url</span>
                            </label>
                            <input type="text" defaultValue={jobUrl} {...register("jobUrl", { required: true })} placeholder="jobs url" className="input input-bordered w-full" />
                        </div>
                    </div>
                    <input type="submit" className="btn bg-green-500 text-white hover:bg-green-700 mt-3 px-5  font-bold " value="update job" />
          
                </form>
            </div>
        </div>
    );
};

export default UpdateJobs;