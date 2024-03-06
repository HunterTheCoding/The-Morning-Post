import Entertainment from "./Entertainment";


const NavEntertainment = () => {

    return (
        <div>
            <nav className=" h-32 bg-gray-800 text-white">
                <nav className="bg-white border-gray-200 dark:bg-gray-800">
                    <div className="p-4 lg:text-2xl">
                    Entertainment
                    </div>
                </nav>
            </nav>
            <Entertainment />
        </div>
    );
};

export default NavEntertainment;