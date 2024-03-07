import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hook/useAxiosSecure";


export interface donarinfo {
    _id: string,
    donaremail:string,
    transactionId:string,
    newDonation:any
  }
const UserDonation = () => {
const AxiosSecrue = useAxiosSecure();
    const { data} = useQuery({
        queryKey: ["Donation",],
        queryFn: async () => {
          const res = await AxiosSecrue.get(`/Donation`);
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

export default UserDonation;
