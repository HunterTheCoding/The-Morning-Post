import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
interface HandleType {
    _id: string;
    headline: string;
    image: string;
    summary: string;
    date: string;
    section: string;
    jobUrl: string;
}
const Jobspost = () => {
    const AxiosPublic = useAxiosPublic();
    const { data: jobsData = [], refetch } = useQuery({
        queryKey: ['jobs'],
        queryFn: async () => {
            const response = await AxiosPublic("/api/v1/jobs")
            return response.data
        }
    })
    console.log(jobsData);

    const handleJobDelete = async (_id: string) => {
        try {
            const result = await Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            })
            if (result.isConfirmed) {
                const response = await AxiosPublic.delete(`/api/v1/jobs/${_id}`)
                console.log(response.data);
                if (response.data.deletedCount > 0) {
                    console.log('job item deleted successfully', response.data);
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${_id} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                } else {
                    console.log('Job item did not delete',);
                }
            }

        } catch (error) {
            console.error('Job item did not delete', error)
        }



    }
    return (
        <div className='py-5 px-5 bg-green-100'>
            <div>
                <h1 className='text-2xl font-bold text-center'>Total Jobs: {jobsData.length}</h1>
                <div className='border mt-5 mb-5 text-black'></div>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead className='text-lg py-5'>
                            <tr>
                                <th>Image</th>
                                <th>Job heading</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                jobsData?.map((job : HandleType) => {
                                    const { _id, headline } = job
                                    return (
                                        <tr key={job._id}>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={job?.image} alt="jobs" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {headline}

                                            </td>
                                            <td> <Link to={`/daseboard/updateJobs/${_id}`}>
                                                <button className='btn bg-red-400' ><FaArrowUpRightFromSquare /></button>
                                            </Link>
                                            </td>
                                            <th>
                                                <button onClick={() => handleJobDelete(_id)} className="btn btn-ghost btn-xs">Delete</button>
                                            </th>
                                        </tr>
                                    )
                                }
                                )
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )

};

export default Jobspost;