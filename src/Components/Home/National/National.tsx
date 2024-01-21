import { Link } from "react-router-dom"
import p1 from "../../../assets/National/nation1.jpg"
import p2 from "../../../assets/National/national3.jpg"
import "./Nation.css"
const National = () => {
    return (
        <div className="mt-5 mb-5">
            <h1 className=" text-xl lg:text-2xl font-bold p-5">National</h1>
            <div className="border lg:mb-5">
            </div>
            <div className="md:flex lg:gap-5 p-5">
                <Link to="#">
                    <div className=" mr-2 lg:mr-6 relative mb-5 md:mb-0 w-full md:w-[400px] lg:w-[550px] h-[420px] md:h-[400px] rounded-md border">
                    
                        <img src={p1}  className="w-full obj lg:w-[550px] md:w-[400px] rounded-md h-[350px]" alt="" />
                        <h4 className="absolute w-full h-14 mt-4  text-white bottom-16 md:bottom-12 font-2xl font-bold px-5">রংপুরে বিক্রি হওয়া নবজাতক উদ্ধার, গ্রেফতার ৩</h4>
                        <p className="text-base font-medium= ml-4 py-2">রংপুরে অস্বচ্ছলতা সুযোগে ৪০ হাজার টাকার বিনিময়ে</p>
                    </div>
                </Link>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-1 lg:gap-6">
                    <Link to="#">
                        <div className="w-full mb-5 md:mb-0 object-cover  md:w-[125px] lg:w-[165px] h-[250px] md:h-[220px] lg:h-[224px] border rounded-lg">
                            <img className=" w-full md:w-[125px] lg:w-[165px] h-[200px] md:h-[110px] rounded-lg" src={p2} alt="" />
                            <h1 className="p-1 lg:py-1 text-[18px] md:text-[12px] py-2 lg:text-base font-medium">বগুড়ায় রাইস মিলে অভিযান</h1>
                        </div>
                    </Link>
                    <div className="w-full mb-5 md:mb-0 object-cover  md:w-[125px] lg:w-[165px] h-[250px] md:h-[220px] lg:h-[224px] border rounded-lg">
                        <img className=" w-full md:w-[125px] lg:w-[165px] h-[200px] md:h-[110px] rounded-lg" src={p2} alt="" />
                        <h1 className="p-1 lg:py-1 text-[18px] md:text-[12px] py-2 lg:text-base font-medium">বগুড়ায় রাইস মিলে অভিযান</h1>
                    </div>
                    <div className="w-full mb-5 md:mb-0 object-cover  md:w-[125px] lg:w-[165px] h-[250px] md:h-[220px] lg:h-[224px] border rounded-lg">
                        <img className=" w-full md:w-[125px] lg:w-[165px] h-[200px] md:h-[110px] rounded-lg" src={p2} alt="" />
                        <h1 className="p-1 lg:py-1 text-[18px] md:text-[12px] py-2 lg:text-base font-medium">বগুড়ায় রাইস মিলে অভিযান</h1>
                    </div>
                    <Link to="#">
                        <div className="w-full mb-5 md:mb-0 object-cover  md:w-[125px] lg:w-[165px] h-[250px] md:h-[220px] lg:h-[224px] border rounded-lg">
                            <img className=" w-full md:w-[125px] lg:w-[165px] h-[200px] md:h-[110px] rounded-lg" src={p2} alt="" />
                            <h1 className="p-1 lg:py-1 text-[18px] md:text-[12px] py-2 lg:text-base font-medium">বগুড়ায় রাইস মিলে অভিযান</h1>
                        </div>
                    </Link>
                    <div className="w-full mb-5 md:mb-0 object-cover  md:w-[125px] lg:w-[165px] h-[250px] md:h-[220px] lg:h-[224px] border rounded-lg">
                        <img className=" w-full md:w-[125px] lg:w-[165px] h-[200px] md:h-[110px] rounded-lg" src={p2} alt="" />
                        <h1 className="p-1 lg:py-1 text-[18px] md:text-[12px] py-2 lg:text-base font-medium">বগুড়ায় রাইস মিলে অভিযান</h1>
                    </div>
                    <div className="w-full mb-5 md:mb-0 object-cover  md:w-[125px] lg:w-[165px] h-[250px] md:h-[220px] lg:h-[224px] border rounded-lg">
                        <img className=" w-full md:w-[125px] lg:w-[165px] h-[200px] md:h-[110px] rounded-lg" src={p2} alt="" />
                        <h1 className="p-1 lg:py-1 text-[18px] md:text-[12px] py-2 lg:text-base font-medium">বগুড়ায় রাইস মিলে অভিযান</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default National;