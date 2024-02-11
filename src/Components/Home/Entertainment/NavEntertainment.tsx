import useAdmin from "../../../Hook/useNews";
import Entertainment from "./Entertainment";


const NavEntertainment = () => {
    const { newsData: EntertainmentData, isLoading: EntertainmentLoading } =
    useAdmin("Entertainment");
//   const {_id, section, headline, source, date, summary, details, image} =Entertainment;
 
  console.log(EntertainmentData,EntertainmentLoading);
  
    return (
        <div>
            <nav className=" h-32 bg-gray-800 text-white">
                <nav className="bg-white border-gray-200 dark:bg-gray-800">
                    <div className="p-4 lg:text-2xl">
                    Entertainment
                    </div>
                </nav>
                <nav className="bg-gray-50 dark:bg-gray-700">
                    <div className="max-w-screen-xl px-4 py-3 mx-auto">
                        <div className="flex items-center">
                            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                                <li>
                                    <a href="#" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Television</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-900 dark:text-white hover:underline">World</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-900 dark:text-white hover:underline">Film</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-900 dark:text-white hover:underline">Song</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-900 dark:text-white hover:underline">Poem</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-900 dark:text-white hover:underline">Drama</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </nav>
            <Entertainment />
        </div>
    );
};

export default NavEntertainment;