// Third Party
import { Link } from "react-router-dom";
// Local modules
import icon from "../../../assets/icon.png";
import Search from "../../../components/Search";

const Header = () => {
    return (
        <header className="bg-gradient-to-br from-[#1a1b30] via-[#16304f] to-[#12284a]">
            <div className="ml-4 pt-6">
                <p className="text-[#A2A5AF] text-sm">Welcome,</p>
                <div className="flex items-center">
                    <h1 className="text-white text-base">Ada Okafor</h1>
                    <img className="w-12" src={icon} alt="hello" />
                </div>
            </div>
            <div className="text-white flex justify-between items-center mx-4 mt-8">
                <div className="bg-[#808080] px-8 py-2 rounded-xl">
                    <p className="text-sm font-bold">0</p>
                    <p className="text-xs">Finished</p>
                </div>
                <div className="bg-[#808080] px-8 py-2 rounded-xl">
                    <p className="text-sm font-bold">0</p>
                    <p className="text-xs">Current book</p>
                </div>
                <div className="bg-[#808080] px-8 py-2 rounded-xl">
                    <p className="text-sm font-bold">0</p>
                    <p className="text-xs">Streak</p>
                </div>
            </div>
            <div className="mx-4">
                <Link to="/dashboard/catalog">
                    <Search />
                </Link>
            </div>
        </header>
    );
};

export default Header;
