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
const AllDonation = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = Context();
  const [donation, setDonation] = useState<HandleType[]>([]);
  useEffect(() => {
    axiosSecure.get(`/Donation`).then((res) => {
      setDonation(res.data);
    });
  }, [axiosSecure, donation, user?.email]);

  return (
    <div className="overflow-x-auto">
      <div className=" p-2 mx-auto sm:p-4 dark:text-gray-100">
        <h2 className="mb-4 text-2xl text-indigo-400 font-semibold leadi">
          Donation List
        </h2>
        <div className="overflow-hidden">
          <table className="min-w-full text-xs">
            <thead className="bg-indigo-200 text-indigo-400">
              <tr className="text-left">
                <th className="p-3">Donation Id :</th>
                <th className="p-3">Donar Name</th>
                <th className="p-3">Donar Email</th>
                <th className="p-3"> Amount</th>
                <th className="p-3">Transaction ID</th>
                <th className="p-3"> Sector</th>
              </tr>
            </thead>
            <tbody className="bg-yellow-50 text-yellow-600">
              {donation?.map((donate, index) => (
                <tr key={donate?._id}>
                  <td className="p-3 md:w-1/6 sm:w-1/6 lg:w-1/6">{index + 1}</td>
                  <td className="p-3 md:w-1/6 sm:w-1/6 lg:w-1/6">{donate?.newDonation?.name}</td>
                  <td className="p-3 md:w-1/6 sm:w-1/6 lg:w-1/6">{donate?.newDonation?.email}</td>
                  <td className="p-3 md:w-1/6 sm:w-1/6 lg:w-1/6">{donate?.newDonation?.amount}</td>
                  <td className="p-3 md:w-1/6 sm:w-1/6 lg:w-1/6">{donate?.transactionId}</td>
                  <td className="p-3 md:w-1/6 sm:w-1/6 lg:w-1/6">{donate?.newDonation?.option}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllDonation;
