
import useAdmin from '../../../Hook/useNews';
const Jobspost = () => {
    const { newsData: Jobs } = useAdmin("jobs");

    const handleJobUpdate = (_id) => {
        console.log('job updated');

    }
    const handleJobDelete = () => {
        console.log('handle job delete');

    }
    return (
        <div className='py-5 px-5'>
            <div>
                <h1 className='text-2xl font-bold text-center'>Jobs</h1>
                <div className='border mt-5 mb-5 text-black'></div>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead className='text-lg py-5'>
                            <tr>
                                <th>Image</th>
                                <th>Jobs</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Jobs?.map((job) => <tr key={job._id}>
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
                                    <td><button onClick={() => handleJobUpdate(_id)} className='btn btn-ghost btn-xs' >Update</button></td>
                                    <th>
                                        <button onClick={() => handleJobDelete(_id)} className="btn btn-ghost btn-xs">Delete</button>
                                    </th>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )

};

export default Jobspost;