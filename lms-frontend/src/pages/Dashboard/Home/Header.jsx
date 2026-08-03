// Third Party
import { Link } from "react-router-dom";
// Local modules
import icon from "../../../assets/icon.png";
import Search from "../../../components/Search";

const Header = () => {
    return (
        <header className="bg-gradient-to-br from-[#1a1b30] via-[#16304f] to-[#12284a]">
            <div className="ml-[2em] pt-[3em]">
                <p className="text-[#A2A5AF] text-2xl">Welcome,</p>
                <div className="flex items-center">
                    <h1 className="text-white text-4xl">Ada Okafor</h1>
                    <img className="w-[70px]" src={icon} alt="hello" />
                </div>
            </div>
            <div className="text-white flex justify-between items-center mx-[2em] mt-[3em]">
                <div className="bg-[#808080] px-[6em] py-[1em] rounded-[20px]">
                    <p className="text-5xl font-bold">0</p>
                    <p className="text-2xl">Finished</p>
                </div>
                <div className="bg-[#808080] px-[6em] py-[1em] rounded-[20px]">
                    <p className="text-5xl font-bold">0</p>
                    <p className="text-2xl">Current book</p>
                </div>
                <div className="bg-[#808080] px-[6em] py-[1em] rounded-[20px]">
                    <p className="text-5xl font-bold">0</p>
                    <p className="text-2xl">Streak</p>
                </div>
            </div>
            <div className="mx-[2em]">
                <Link to="/dashboard/catalog">
                    <Search />
                </Link>
            </div>
        </header>
    );
};

export default Header;
