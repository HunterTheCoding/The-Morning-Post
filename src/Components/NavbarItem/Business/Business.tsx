import { useEffect, useState } from "react";

interface businessItem {
    id: number;
    headline: string;
    paragraph: string
    image: string;
}
const Business = () => {
    const [businessData, setBusinessData] = useState<businessItem[]>([]);
    useEffect(() => {
        fetch("/business.json")
            .then(res => res.json())
            .then(data => setBusinessData(data as businessItem[]))
            .catch(error => {
                console.log(error);
            })
    }, [])
    console.log(businessData);

    return (
        <div>

            <div className="lg:flex gap-5">

                <div className="max-w-[980px] grid gap-5">
                    {/* grid grid-rows-2  */}
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">

                        <div className="col-span-2">
                            {
                                businessData.slice(0, 1).map((item, index) => {
                                    return (
                                        <div className="" key={index}>

                                            <div className="max-h-96 h-full overflow-hidden bg-white relative">
                                                <div>
                                                    <img className=" h-full object-cover overflow-hidden" src={item.image} alt="" />
                                                </div>

                                                <div className="absolute bottom-0 ">
                                                    <a href="#">
                                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{item.headline}</h5>
                                                    </a>
                                                    <p className="mb-3 font-normal text-white">{item.paragraph}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <div>
                            {
                                businessData.slice(0, 1).map((item, index) => {

                                    return (
                                        <div className=" h-full" key={index}>
                                            <div className="h-full bg-white border-l pl-4">
                                                <a href="#">
                                                    <img className="w-full min-h-56 object-cover" src={item.image} alt="" />
                                                </a>
                                                <div className="p-5 pl-0">
                                                    <a href="#">
                                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.headline}</h5>
                                                    </a>
                                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.paragraph}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="border  border-gray-300"></div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        {
                            businessData.slice(1, 4).map((item) => {
                                return (

                                    <div className="bg-white  first:pr-4 last:pl-4 border-gray-200 first:border-r last:border-l">

                                        <a href="#">
                                            <img className="w-full h-56 object-cover" src={item.image} alt="" />
                                        </a>
                                        <div className="p-5 pl-0">
                                            <a href="#">
                                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.headline}</h5>
                                            </a>
                                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.paragraph}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>


                {/* <div className="border border-gray-300"></div> */}
                <span className="border border-gray-300"></span>
                <div className="border">
                    <div className="">
                    <h1 className="text-2xl text-center bg-green-700 block p-5 text-white">Summary</h1>
                        <p className="p-5">
                            It seems like you're looking for a brief summary or update on business-related news or activities for today. However, I don't have real-time data or access to current news updates. If you have specific questions or topics you'd like information on, feel free to provide more details, and I'll do my best to assist you based on the information available up to my last training cut-off in January 2022. If you have access to news sources or specific topics you're interested in, that could be a good starting point for discussing today's business summary.</p>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Business;