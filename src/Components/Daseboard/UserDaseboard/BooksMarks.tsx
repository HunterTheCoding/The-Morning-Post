import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { MdDelete } from "react-icons/md";
import Context from "../../../Hook/useContext";
interface HandleType {
    _id: number;
    index:number,
    headline: string;
    section: string;
    date: string;
}

const BooksMarks = () => {
    const AxiousSecru = useAxiosSecure();
    const {user} = Context();
    const { data:bookmarks,refetch } = useQuery({
        queryKey: ["/Bookmark",user?.email],
        queryFn: async () => {
          const res = await AxiousSecru.get(`/Bookmark/${user?.email}`);

          return res.data;
        },
      });
const hengledelete=(id:any)=>{
    // todo
    console.log(id)
    AxiousSecru.delete(`/bookmarks/${id}`)
    .then((res)=>{
        console.log(res.data);
        if(res.data.deletedCount){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your Item is delete succfully",
                showConfirmButton: false,
                timer: 1500
              });
        }
        refetch();

    }).catch(error=>{
        console.log(error)
    });
}
    return (
        <div className="bg-white">

            <div className="max-w-xg m-6">
                <div className="flex gap-5 my-3">
                    <h1 className="bg-yellow-200 p-3 rounded-lg text-[12px] md:text-base lg:text-xl font-semibold mt-3">BookMark News List</h1>
                    <h1 className=" bg-yellow-200 p-3 rounded-lg ml-2  text-[12px] md:text-base lg:text-xl font-semibold mt-3">Total Bookmarks: {bookmarks?.length}</h1>
                </div>

                <div className="overflow-x-auto ">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="bg-base-300 font-semibold text-[12px] md:text-[14px] lg:text-base ">
                                <th>No</th>
                                <th>Headline</th>
                                <th>Writer</th>
                                <th>Date</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookmarks?.map((item:HandleType,idx:number) => {
                                    return (
                                        <tr key={item._id} className="text-[12px] md:text-[14px] lg:text-base">
                                            <th>{idx +1}</th>
                                            <td>{item.headline}</td>
                                            <td>{item.section}</td>
                                            <td>{item.date}</td>
                                            <td onClick={()=>hengledelete(item?._id)} ><MdDelete className="text-2xl font-bold text-red-500" /></td>

                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>


            </div>
        </div>
    );
};

export default BooksMarks;