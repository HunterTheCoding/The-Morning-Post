import Context from "../../../Hook/useContext";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { donarinfo } from "../AdminDaseboard/UserDonation";
const AllDonation = () => {
  const axiosSecure = useAxiosSecure()
  const {user}= Context()
  const { data } = useQuery({
    queryKey: ["donation",user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/donation/${user?.email}`);
      return res.data;
    },
  });
    return (
     <div className="py-5 px-5">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Amount</th>
              <th>Category</th>
              <th>transaction Id</th>
            </tr>
          </thead>
          <tbody>
           {
            data?.map((item:donarinfo,index:string)=> <tr>
            <th>{index+1}</th>
            <td>{item?.donaremail}</td>
            <td>{item?.newDonation?.amount}</td>
            <td>{item?.newDonation?.option}</td>
            <td>{item?.transactionId}</td>
          </tr>)
           }
          </tbody>
        </table>
      </div>
    </div>
);
};

export default AllDonation;

