import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import Context from "../../../Hook/useContext";

interface HandleType {
  id: number;
  email: string;
  amount: string;
  transactionId: string;
  option: string;
}

const AllDonation = () => {
  const [donation, setDonation] = useState<HandleType[] | null>(null); // Initialize with null

  const axiosSecure = useAxiosSecure();
  const { user } = Context();

  useEffect(() => {
    console.log(user);

    axiosSecure.get(`/donation/${user?.email}`).then((res) => {
      setDonation(res.data);
      console.log(res.data);
    });
  }, [axiosSecure, user]);

  return (
    <div>
        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
            <h2 className="mb-4 text-2xl text-indigo-400 font-semibold leadi">
                Donation List
            </h2>
            <div className="overflow-x-auto">
                {donation  && donation.length > 0 ? (
                    <table className="min-w-full text-xs">
                        <thead className="bg-indigo-200 text-indigo-400">
                            <tr className="text-left">
                                <th className="p-3">Donation Id no:</th>
                           
                                <th className="p-3">Doner Email</th>
                                <th className="p-3">Donation Amount</th>
                                <th className="p-3">Transaction ID</th>
                                <th className="p-3">Donation Sector</th>
                            </tr>
                        </thead>
                        <tbody className="bg-indigo-50 text-indigo-500">
                            {donation.map((donationItem, index) => (
                                <tr key={index}>
                                    <td>{index}</td>
                          
                                    <td className="p-3">{donationItem.email}</td>
                                    <td className="p-3">{donationItem.amount}</td>
                                    <td className="p-3">{donationItem.transactionId}</td>
                                    <td className="p-3">{donationItem.option}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div>No donation data available.</div>
                )}
            </div>
        </div>
    </div>
);

};

export default AllDonation;

{
  /* <tbody className="bg-yellow-50 text-yellow-600">
  {users?.map((user, index) => (
    <tr key={user?._id}>
      <td>{index + 1}</td>
      <td className="p-3">
        <p>
          <img className="w-10 h-10" src={user.image} alt="" />
        </p>
      </td>
      <td className="p-3">{user?.name}</td>
      <td className="p-3">{user?.email}</td>
    
      <td className="p-3 text-right grid grid-cols-2">
        <p>
          <button
            onClick={() => handleDeleteuser(user?._id)}
            className="btn p-2 bg-yellow-400 text-white hover:bg-yellow-600 btn-sm"
          >
            <FaTimesCircle /> Delete
          </button>
        </p>
      </td>
    </tr>
  ))}
  </tbody> */
}
