import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="flex justify-around items-center text-3xl mb-8">
            <h1 className="text-6xl font-bold">
                Libra<span className="text-amber-500">Core</span>
            </h1>
            <nav>
                <ul className="flex list-none gap-[25px]">
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
                to="/signin"
                className="no-underline text-[#111827] rounded-xl py-1 px-2 border"
            >
                Sign In
            </Link>
        </header>
    );
}

export default Header;
