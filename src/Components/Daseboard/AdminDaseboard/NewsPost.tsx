import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import { News } from "../../../Hook/useNews";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";



const NewsPost = () => {
    const AxiosPublic = useAxiosPublic();
    const { data, refetch } = useQuery({
        queryKey: ["News"],
        queryFn: async () => {
            const res = await AxiosPublic.get(`/News`);
            // Set news data to state
            return res.data;
        },
    });

    const handleDeleteNews = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                AxiosPublic.delete(`/News/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "The news has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div className='py-5 px-5 bg-green-100'>
            <div>
                <h1 className='text-2xl font-bold text-center'>News</h1>
                <div className='border mt-5 mb-5 text-black'></div>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead className='text-lg py-5'>
                            <tr>
                                <th>Image</th>
                                <th>News</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.map((job: News) => <tr key={job._id}>
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
                                        {job?.headline}

                                    </td>
                                    <td><Link to={`/daseboard/editnews/${job?._id}`}>
                                    <button className='btn btn-ghost btn-xs' >Update</button>
                                    </Link></td>
                                    <th>
                                        <button onClick={()=> handleDeleteNews(job._id)} className="btn btn-ghost btn-xs">
                                            <FaTrash></FaTrash>
                                            Delete</button>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                        {/* foot */}
                    </table>
                </div>
            </div>
        </div>
    );
};
export default NewsPost;