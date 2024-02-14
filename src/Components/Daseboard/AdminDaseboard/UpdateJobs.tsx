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
    const onSubmit = async (data: any) => {
        console.log(data)
        const updatedJobInfo = {
            headline: data.headline,
            image: data.img,
            summary: data.summry,
            date: data.date,
            section: data.section,
            jobUrl: data.jobsurl,

        };
        // reset()
        console.log(updatedJobInfo)
        const response = await axiosPublic.patch(`/api/v1/jobs/${_id}`, updatedJobInfo);
        console.log('Response from updated job', response.data)
        if (response.data.modifiedCount > 0) {
            reset()
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${headline} updated successfully`,
                showConfirmButton: false,
                timer: 1500
            })
        }
    }
    return (
        <div>
        
            <div className="px-10">
            <h1 className="py-5 text-xl font-semibold text-white">Update The Job :{headline}</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex gap-5">
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
                    <div className="flex gap-5">
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
                            <input type="text" defaultValue={summary} {...register("summry", { required: true })} placeholder="Summry" className="input input-bordered w-full" />

                        </div>
                    </div>
                    <div className="flex gap-5">
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
                            <input type="text" defaultValue={jobUrl} {...register("jobsurl", { required: true })} placeholder="jobs url" className="input input-bordered w-full" />
                        </div>
                    </div>
                    <button className="btn btn-success mt-3 px-5 py-5 font-bold ">update job</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateJobs;