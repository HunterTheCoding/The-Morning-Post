

import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hook/useAxiosPublic";


const Addjob = () => {
    const { register, handleSubmit, reset } = useForm();
    const axouspublic = useAxiosPublic();
    // const axioussecret = useAxousSecret();

    const onSubmit = async (data : any) => {
        console.log(data)
        const jobsinfo = {
            headline: data.headline,
            image: data.img,
            summary: data.summry,
            date: data.date,
            section: data.section,
            jobUrl: data.jobsurl,
          
        };
        // reset()
        console.log(jobsinfo)
        const jobinfo = await axouspublic.post('/News', jobsinfo);
        console.log(jobinfo.data)
        if (jobinfo.data.insertedId) {
            reset()
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
        <div>
            <div className="px-10">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex gap-5">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Headline</span>
                            </label>
                            <input type="text" {...register("headline", { required: true })} placeholder="Headline" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Section</span>
                            </label>
                            <input type="text" {...register("section", { required: true })} placeholder="section" readOnly defaultValue="jobs" className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="text" {...register("img", { required: true })} placeholder="Image" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Summary</span>
                            </label>
                            <input type="text" {...register("summry", { required: true })}  placeholder="Summry" className="input input-bordered w-full" />

                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" {...register("date", { required: true })} placeholder="Date" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Job url</span>
                            </label>
                            <input type="text" {...register("jobsurl", { required: true })}  placeholder="jobs url" className="input input-bordered w-full" />
                        </div>
                    </div>
                    <button className="btn btn-success mt-3 px-5 py-5 font-bold ">Add jobs</button>
                </form>
            </div>
        </div>
    );
};

export default Addjob;