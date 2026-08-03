// Third Party
import { Link } from "react-router-dom";
// Local modules
import Logo from "../../components/Logo.jsx";

const Header = () => {
    return (
        <header className="flex justify-between items-center text-[30px] mx-[30px] my-[50px]">
            <Logo />
            <p>
                Already a member?{" "}
                <Link to="/login" className="text-[#E4D9BE] font-bold">
                    <span>Sign In</span>
                </Link>
            </p>
        </header>
    );
};

export default Header;
