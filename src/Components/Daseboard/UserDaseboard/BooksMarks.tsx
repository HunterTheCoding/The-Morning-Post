import {  useEffect, useState } from "react";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import Context from "../../../Hook/useContext";

interface HandleType {
    id: number;
    headline: string;
    writer: string;
    date: string;
}
const BooksMarks = () => {
    const [bookmark, setBookmark] = useState<HandleType[]>([])
    const { user } =Context()
    const axiosSecure = useAxiosSecure()
    

// useEffect(()=>{
//     fetch("../bookmark.json")
//     .then(res => res.json())
//     .then(data =>{
//         setBookmark(data)
//         console.log("from bookmark" ,data);   
//     })
// },[])
useEffect(()=>{
    axiosSecure.get(`/Bookmark/${user?.email}`)
        .then(res => {
            setBookmark(res.data)
            console.log('from bookmark', res.data);
        })
    console.log('bookmark', bookmark);

},[axiosSecure, bookmark, user?.email])
    return (
        <div className="bg-white">

            <div className="max-w-xg m-6">
                <div className="flex gap-5 my-3">
                    <h1 className="bg-yellow-200 p-3 rounded-lg text-lg font-semibold mt-3">BookMark News List</h1>
                    <h1 className=" bg-yellow-200 p-3 rounded-lg ml-2 text-lg font-semibold mt-3">Total Bookmark User: {bookmark.length}</h1>
                </div>

                <div className="overflow-x-auto ">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="bg-base-300 font-semibold">
                                <th>No</th>
                                <th>Headline</th>
                                <th>Writer</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookmark.map((item, index) => {
                                    return (
                                        <tr key={item.id}>
                                            <th>{1 + index}</th>
                                            <td>{item.headline}</td>
                                            <td>{item.writer}</td>
                                            <td>{item.date}</td>
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