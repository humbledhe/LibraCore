// Third Party
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="flex gap-5 flex-col items-center bg-[#181828] text-xs text-[#808080] mt-10">
            <h3 className="text-[#ffffff] text-base font-bold mt-8">
                Libra<span className="text-amber-500">Core</span>
            </h3>
            <nav>
                <ul className="flex gap-5 list-none">
                    <li>
                        <Link
                            to="/catalog"
                            className="decoration-none text-[#808080]"
                        >
                            Catalog
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className="decoration-none text-[#808080]"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="privacy">Privacy</Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className="decoration-none text-[#808080]"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
            <p className="mb-8">
                &copy; 2026 LibraCore Libray System, All rights reserved
            </p>
        </footer>
    );
};

export default Footer;
