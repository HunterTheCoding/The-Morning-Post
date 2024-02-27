import { ReactNode, useEffect, useState } from "react";

import Context from "../../../Hook/useContext";
import useAxiosSecure from "../../../Hook/useAxiosSecure";

interface HandleType {
  transactionId: ReactNode;
  newDonation: any;
  _id: string;
  amount: number;
  image: string;
  name: string;
  email: string;
  option: string;
}
const UserDonation = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = Context();
  const [donation, setDonation] = useState<HandleType[]>([]);
  useEffect(() => {
    axiosSecure.get(`/donation/${user?.email}`).then((res) => {
      setDonation(res.data);
      console.log("from donation", res.data);
    });
    console.log("donation", donation);
  }, [axiosSecure, donation, user?.email]);

  return (
    <div>
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
        <h2 className="mb-4 text-2xl text-indigo-400 font-semibold leadi">
          Donation List
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <thead className="bg-indigo-200 text-indigo-400">
              <tr className="text-left">
                <th className="p-3">Donation Id no:</th>
                <th className="p-3">Doner Name</th>
                <th className="p-3">Doner Email</th>
                <th className="p-3">Donation Amount</th>
                <th className="p-3">Transection ID</th>
                <th className="p-3">Donation Sector</th>
              </tr>
            </thead>
            <tbody className="bg-yellow-50 text-yellow-600">
              {donation?.map((donate, index) => (
                <tr key={donate?._id}>
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">{donate?.newDonation?.name}</td>
                  <td className="p-3">{donate?.newDonation?.email}</td>
                  <td className="p-3">{donate?.newDonation?.amount}</td>
                  <td className="p-3">{donate?.transactionId}</td>
                  <td className="p-3">{donate?.newDonation?.option}</td>
               
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserDonation;

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
