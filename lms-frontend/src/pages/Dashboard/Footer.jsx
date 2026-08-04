// Third Party
// Third Party
// Third Party
// Third Party
import { NavLink } from "react-router-dom";
// Local modules
import home from "../../assets/home.png";
import catalog from "../../assets/catalog.png";
import myLibrary from "../../assets/myLibrary.png";
import profile from "../../assets/profile.png";

const Footer = () => {
    return (
        <footer className="fixed bottom-0 left-0 bg-white w-full z-50">
            <div className="flex justify-around">
                <NavLink to="/dashboard" className="flex flex-col items-center">
                    <img src={home} alt="home" className="w-10" />
                    <p className="text-xs font-bold">Home</p>
                </NavLink>
                <NavLink
                    to="/dashboard/catalog"
                    className="flex flex-col items-center"
                >
                    <img src={catalog} alt="catalog" className="w-10" />
                    <p className="text-xs font-bold">Catalog</p>
                </NavLink>
                <NavLink
                    to="/dashboard/my-library/Reading"
                    className="flex flex-col items-center"
                >
                    <img src={myLibrary} alt="My Library" className="w-10" />
                    <p className="text-xs font-bold">My Library </p>
                </NavLink>
                <NavLink
                    to="/dashboard/profile"
                    className="flex flex-col items-center"
                >
                    <img src={profile} alt="profile" className="w-10" />
                    <p className="text-xs font-bold">Profile</p>
                </NavLink>
            </div>
        </footer>
    );
};

export default Footer;
