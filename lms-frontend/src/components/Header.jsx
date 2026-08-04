// Third party
import { Link } from "react-router-dom";

// Local modules
import Logo from "../components/Logo.jsx";

function Header() {
    return (
        <header className="flex justify-around items-center text-sm my-8">
            <Logo />
            <nav>
                <ul className="flex list-none gap-4">
                    <li>
                        <Link
                            to="/catalog"
                            className="no-underline text-[#111827]"
                        >
                            Catalog
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className="no-underline text-[#111827]"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className="no-underline text-[#111827]"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
            <Link
                to="/login"
                className="no-underline text-[#111827] rounded-xl py-1 px-2 border"
            >
                Sign In
            </Link>
        </header>
    );
}

export default Header;
